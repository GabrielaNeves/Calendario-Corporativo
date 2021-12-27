'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('InstrutoresDisciplinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      instrutorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Instrutores', key: 'id'}
      },
      disciplinaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Disciplinas', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('InstrutoresDisciplinas');
  }
};