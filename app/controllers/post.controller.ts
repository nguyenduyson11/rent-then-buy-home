import { CreatePost } from "./../interfaces/post-interface";
import { pagination } from "./../commons/pagination";
import { NextFunction, Request, Response } from "express";
import PostRepository from "../repositories/PostRepository";
import createError from "http-errors";
class PostController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const page = req.query.page;
      const { limit, textSearch, category } = req.query;
      const response = await PostRepository.findAllPost({
        textSearch,
        category,
        ...pagination(page, limit),
      });
      return res.json({
        pagination: {
          page,
          limit,
        },
        data: response,
      });
    } catch (error) {
      next(createError(404, "Notfound"));
    }
  }
  async detail(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const response = await PostRepository.findDetailPost(id
     );
      return res.json({
        data: response,
      });
    } catch (error) {
      next(createError(404, "Notfound"));
    }
  }
  async create(req: any, res: Response, next: NextFunction) {
    const createPost: CreatePost = req.body;
    const files = req.files;
    try {
      const response = await PostRepository.createPost({
        ...createPost, files
      });
      return res.json(response)
    } catch (error) {
      console.log(error)
      next(createError(400, "Create failure"));
    }
  }
}

export default new PostController();
