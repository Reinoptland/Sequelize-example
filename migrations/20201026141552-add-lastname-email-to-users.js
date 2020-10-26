"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("users", "lastName", Sequelize.STRING);
    await queryInterface.addColumn("users", "email", Sequelize.STRING);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "lastName");
    await queryInterface.removeColumn("users", "email");
  },
};
