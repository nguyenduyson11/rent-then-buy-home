import { NextFunction, Request, Response } from "express";
import { CreatePost } from "../interfaces/post-interface";
import Joi from "joi";
import createError from "http-errors";
export const validatePost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description, direction, address, acreage, price, categoryId }: CreatePost =
    req.body;
  const schema = Joi.object().keys({
    title: Joi.string().min(3).max(30).required(),
    description: Joi.string().required(),
    direction: [Joi.string(), Joi.number()],
    address: Joi.string().required(),
    acreage: Joi.string().required(),
    price: Joi.string().required(),
    categoryId: Joi.string().required()
  });
  schema
    .validateAsync({
      title,
      description,
      direction,
      address,
      acreage,
      price,
      categoryId
    })
    .then((val) => {
      req.body = val;
      next();
    })
    .catch((err) => {
      next(
        createError(400, `Failed to validate input ${err.details[0].message}`)
      );
    });
};
