import sequelize from './connection-mysql';
import Character from './models/character';
import Movie from './models/movie';
import Category from './models/category';



Character.belongsToMany(Movie, { through: 'CharacterMovies' });
Movie.belongsToMany(Character, { through: 'CharacterMovies' });

Movie.belongsToMany(Category, { through: 'MovieCategories' });
Category.belongsToMany(Movie, { through: 'MovieCategories' });


sequelize.sync({ force: true }) 
    .then(() => {
        console.log('Database and tables synced');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });