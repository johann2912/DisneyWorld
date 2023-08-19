import { DataTypes, Model } from 'sequelize';
import sequelize from '../connection-mysql'; // Importa la instancia de Sequelize configurada

class Character extends Model {}
Character.init(
  {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    history: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: 'Character',
    paranoid: true,
  }
);

export default Character;
