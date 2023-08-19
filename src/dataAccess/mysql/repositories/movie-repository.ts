import Movie from '../models/movie'; // Importa el modelo de Movie

class MovieRepository {
  async create(data: any): Promise<Movie> {
    return Movie.create(data);
  }

  async findById(id: number): Promise<Movie | null> {
    return Movie.findByPk(id);
  }

  async update(id: number, data: any): Promise<any> {
    Movie.update(data, {
      where: { id },
    });
  }

  async delete(id: number): Promise<boolean> {
    const deletedRowCount = await Movie.destroy({
      where: { id },
    });
    return deletedRowCount > 0;
  }
}

const movieRepository = new MovieRepository();

export default movieRepository;
