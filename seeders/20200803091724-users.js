"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Rok",
          email: "rok@rok.com",
          phone: 123456,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bosti",
          email: "bosti@bosti.com",
          phone: 123456,
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
