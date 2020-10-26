"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Wouter",
          lastName: "de Vos",
          email: "wouter@wouter.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Lisa",
          lastName: "Scorzon",
          email: "lisa@lisa.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Eszter",
          lastName: "Szollozi",
          email: "eszter@eszter.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
