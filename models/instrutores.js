'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instrutores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Instrutores.belongsToMany(models.Disciplinas, {through: 'InstrutoresDisciplinas'})
    }
  };
  Instrutores.init({
    nome: DataTypes.STRING,
    slug: DataTypes.STRING,
    contato: DataTypes.STRING,
    apelido: DataTypes.STRING,
    cargo: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Instrutores',
  });
  return Instrutores;
};