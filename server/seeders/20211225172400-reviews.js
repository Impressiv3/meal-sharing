"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Reviews",
      [
        {
          title: "Was a good one",
          description: "I really liked it!",
          rating: 5,
          mealId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Terrible",
          description: "Garbage",
          rating: 5,
          mealId: "11",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Was bad",
          description: "I really liked it!",
          rating: 5,
          mealId: "21",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Terrible",
          description: "Yoo",
          rating: 5,
          mealId: "31",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Reviews', null, {});
  },
}; 