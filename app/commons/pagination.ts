import { LIMIT_DEFAULT, PAGE_DEFAULT } from "./../constants/post.constants";
export interface pagination {
  page: string;
  limit: string;
}
export const pagination = (page: any, limit: any) => {
  const pageNumber = parseInt(page ? page : PAGE_DEFAULT.toString());
  const limitNumber = parseInt(limit ? limit : LIMIT_DEFAULT.toString());
  return {
    page: pageNumber,
    limit: limitNumber,
  };
};
