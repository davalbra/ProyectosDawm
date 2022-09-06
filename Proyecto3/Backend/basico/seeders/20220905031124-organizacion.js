"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    for (let i = 0; i < 4; i++) {
      await queryInterface.bulkInsert(
        "organizacions",
        [
          {
            nombre: "organizacions " + i,
            cantidad: 10 + i,
            presupuesto: Math.floor(Math.random() * 1000000000),
            aficionados: Math.floor(Math.random() * 100000),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    }
    const organizacions = await queryInterface.sequelize.query(
      `SELECT id from organizacions;`
    );
    const organizacionsRow = organizacions[0];
    for (let i = 0; i < 10; i++) {
      await queryInterface.bulkInsert(
        "copas",
        [
          {
            nombre: "copa " + i,
            cantidad: 10 + i,
            views: Math.floor(Math.random() * 1000000000),
            members: Math.floor(Math.random() * 100000),
            organizacionid: organizacionsRow[Math.floor(Math.random() * 4)].id,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("organizacions", null, {});
    await queryInterface.bulkDelete("copas", null, {});
  },
};
