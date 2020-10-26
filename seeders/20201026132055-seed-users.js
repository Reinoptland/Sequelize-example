"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        { firstName: "Wouter", createdAt: new Date(), updatedAt: new Date() },
        { firstName: "Lisa", createdAt: new Date(), updatedAt: new Date() },
        { firstName: "Eszter", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
