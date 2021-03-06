import { Types } from "mongoose";
import cloudinary from "../commons/cloud";
import { CreatePost, QueryPost } from "../interfaces/post-interface";
import Post, { PostDocument, POST_STATUS } from "../models/Post";

class PostRepository {
  async createPost(newPost: CreatePost): Promise<any> {
    const { files, ...body } = newPost;
    console.log(files)
    let result;
    const listFilesPost = files.map(async (file: any)=> {
      return cloudinary.uploader.upload(file.path, {
        resource_type: "auto",
      });
    })
    if (files.length > 0) {
      result = await Promise.all(listFilesPost)
    }
    const images = result?.map(file => file.secure_url);
    // console.log(result);
    console.log(images);
    return await Post.create({
      ...body,
      images: result ? images : null,
    });
  }
  async deletePost(id: string): Promise<PostDocument> {
    return await Post.findOneAndUpdate(
      { _id: id },
      {
        status: POST_STATUS.INACTIVE,
      }
    );
  }
  async findAllPost({
    textSearch,
    category,
    page,
    limit,
  }: QueryPost): Promise<PostDocument[]> {
    const options = { page, limit };
    const startIndex: number = (page - 1) * limit;
    if (textSearch) {
      Object.assign(options, {
        title: { $regex: new RegExp(textSearch, "i") },
      });
    }
    if (category) {
      Object.assign(options, {
        categoryId: category,
      });
    }
    return await Post.find(options).populate({ path: 'categoryId', select: 'title' }).limit(limit).skip(startIndex);
  }
  async findDetailPost(id: any) {
    const idPost = new Types.ObjectId(id);
    console.log(id)
    return await Post.findOne({ _id: idPost }).populate({ path: 'categoryId', select: 'title' });
  }
}

export default new PostRepository();
