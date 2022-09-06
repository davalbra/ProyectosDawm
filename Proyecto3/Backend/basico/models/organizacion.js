"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class organizacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  organizacion.init(
    {
      nombre: DataTypes.STRING,
      cantidad: DataTypes.INTEGER,
      presupuesto: DataTypes.INTEGER,
      aficionados: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "organizacion",
    }
  );
  return organizacion;
};
