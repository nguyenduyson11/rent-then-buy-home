import Category from "../models/Category";
class CategoryRepository {
  async findAll() {
    return await Category.find();
    
  }
}
export default new CategoryRepository;
