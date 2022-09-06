"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("copas", {
      fields: ["organizacionid"],
      type: "foreign key",
      name: "copas_organizacion_association",
      references: {
        table: "organizacions",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint("copas", {
      fields: ["organizacionid"],
      type: "foreign key",
      name: "copas_organizacion_association",
      references: {
        table: "organizacions",
        field: "id",
      },
    });
  },
};
