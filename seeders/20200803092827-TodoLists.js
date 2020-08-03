"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "TodoLists",
      [
        {
          name: "Networking opportunities",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Job opportunities",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("TodoLists", null, {});
  },
};
