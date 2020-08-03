"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "TodoItems",
      [
        {
          task: "Getting onvolved in developer networking groups",
          deadline: "September",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Getting involved in some job searching groups",
          deadline: "September",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("TodoItems", null, {});
  },
};
