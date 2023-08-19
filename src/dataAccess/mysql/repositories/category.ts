import Category  from '../models/category'; // Importa el modelo de Category

class CategoryRepository {
  async create(data: any): Promise<Category> {
    return Category.create(data);
  }

  async findById(id: number): Promise<Category | null> {
    return Category.findByPk(id);
  }

  async update(id: number, data: any): Promise<any> {
    Category.update(data, {
      where: { id },
    });
  }

  async delete(id: number): Promise<boolean> {
    const deletedRowCount = await Category.destroy({
      where: { id },
    });
    return deletedRowCount > 0;
  }
}

const categoryRepository = new CategoryRepository();

export default categoryRepository;
