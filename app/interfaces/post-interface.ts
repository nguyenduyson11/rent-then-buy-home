export interface CreatePost {
  title: string;
  description: string;
  direction: string;
  address: string;
  acreage: string;
  bathroom: string;
  bedroom: string;  
  price: string;
  files: any;
  categoryId: string;
}
export interface QueryPost {
  textSearch?: any,
  category?: any,
  page: number,
  limit: number
}