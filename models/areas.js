'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Areas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Areas.belongsTo(models.Pilares, {
        foreignKey: 'pilaresId'
      })
      Areas.hasMany(models.Disciplinas, {
        foreignKey: 'areaId'
      })
    }
  };
  Areas.init({
    nome: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Areas',
  });
  return Areas;
};