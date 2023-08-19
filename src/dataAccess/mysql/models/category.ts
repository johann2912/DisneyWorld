import { DataTypes, Model } from 'sequelize';
import sequelize from '../connection-mysql'; // Importa la instancia de Sequelize configurada

class Category extends Model {}
Category.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Category',
    paranoid: true,
  }
);

export default Category;
