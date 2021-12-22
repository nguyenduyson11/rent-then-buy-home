import { pagination } from "./../commons/pagination";
import { NextFunction, Request, Response } from "express";
import CategoryRepository from "../repositories/CategoryRepository";

import createError from "http-errors";
class CategoryController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await CategoryRepository.findAll();
      return res.json({
        data: response,
      });
    } catch (error) {
      next(createError(404, "Notfound"));
    }
  }
}
export default new CategoryController();
