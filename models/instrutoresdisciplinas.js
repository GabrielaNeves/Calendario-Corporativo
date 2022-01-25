'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InstrutoresDisciplinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Disciplinas.belongsToMany(models.Instrutores, {through: InstrutoresDisciplinas, uniqueKey: 'instrutorId'})
      models.Instrutores.belongsToMany(models.Disciplinas, {through: InstrutoresDisciplinas, uniqueKey: 'disciplinaId'})
    }
  };
  InstrutoresDisciplinas.init({
    instrutorId: DataTypes.INTEGER,
    disciplinaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InstrutoresDisciplinas',
  });
  return InstrutoresDisciplinas;
};