import Character from '../models/character'; // Importa el modelo de Character

class CharacterRepository {
  async create(data: any): Promise<Character> {
    return Character.create(data);
  }

  async findById(id: number): Promise<Character | null> {
    return Character.findByPk(id);
  }

  async update(id: number, data: any): Promise<any> {
    Character.update(data, {
      where: { id },
    });
  }

  async delete(id: number): Promise<boolean> {
    const deletedRowCount = await Character.destroy({
      where: { id },
    });
    return deletedRowCount > 0;
  }
}

const characterRepository = new CharacterRepository();

export default characterRepository;
