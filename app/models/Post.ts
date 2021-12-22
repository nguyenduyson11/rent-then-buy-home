import mongoose, { Schema, Types } from "mongoose";
export enum POST_STATUS {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    direction: { type: String },
    address: { type: String, required: true },
    acreage: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String },
    status: {
      type: String,
      enum: Object.values(POST_STATUS),
      default: POST_STATUS.ACTIVE,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

export type PostDocument = mongoose.Document;
export default mongoose.model("Post", PostSchema);
