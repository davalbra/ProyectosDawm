"use strict";
const { Model } = require("sequelize");
const organizacion = require("./organizacion");
module.exports = (sequelize, DataTypes) => {
  class copas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      copas.belongsTo(models.organizacion);
      models.organizacion.hasMany(copas);
    }
  }
  copas.init(
    {
      nombre: DataTypes.STRING,
      cantidad: DataTypes.INTEGER,
      views: DataTypes.INTEGER,
      members: DataTypes.INTEGER,
      organizacionid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "copas",
    }
  );
  return copas;
};
