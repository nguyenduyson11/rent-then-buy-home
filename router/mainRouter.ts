import PostController from "../app/controllers/post.controller";
import { Router, Request, Response } from "express";
import multer from "../app/commons/multer";
import { validatePost } from "../app/commons/validation";
import CategoryController from "../app/controllers/category.controller";
const router = Router();

router.get("/posts/:id", PostController.detail);
router.get("/posts", PostController.index);
router.post(
  "/posts",
  multer.array('images') ,
  validatePost,
  PostController.create
);
router.get("/category", CategoryController.index);
export default router;
