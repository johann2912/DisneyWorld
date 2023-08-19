module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.FLOAT
      },
      history: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      releaseDate: {
        type: Sequelize.DATE
      },
      rating: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // Otras columnas...
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });

    /**
     * relations
     */
    await queryInterface.addColumn('Characters', 'movieId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Movies',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    await queryInterface.addColumn('Movies', 'characterId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Characters',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    await queryInterface.addColumn('Movies', 'categoryId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Characters');
    await queryInterface.dropTable('Movies');
    await queryInterface.dropTable('Categories');
  }
};
