"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("organizacions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      cantidad: {
        type: Sequelize.INTEGER,
      },
      presupuesto: {
        type: Sequelize.INTEGER,
      },
      aficionados: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("organizacions");
  },
};
