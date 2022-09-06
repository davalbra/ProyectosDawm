"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("copas", {
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
      views: {
        type: Sequelize.INTEGER,
      },
      members: {
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
      organizacionid: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("copas");
  },
};
