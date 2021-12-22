export interface CreatePost {
  title: string;
  description: string;
  direction: string;
  address: string;
  acreage: string;
  price: string;
  file: any;
  categoryId: string;
}
export interface QueryPost {
  textSearch?: any,
  category?: any,
  page: number,
  limit: number
}