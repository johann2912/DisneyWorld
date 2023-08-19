import { DataTypes, Model } from 'sequelize';
import sequelize from '../connection-mysql'; // Importa la instancia de Sequelize configurada

class Movie extends Model {}
Movie.init(
  {
    title: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    rating: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: 'Movie',
    paranoid: true,
  }
);

export default Movie;
