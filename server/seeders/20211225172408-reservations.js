"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Reservations",
      [
        {
          mealId: 1,
          seats_to_reserve: 6,
          first_name: "Balint",
          last_name: "Szabad",
          email: "whatever@hotmail.com",
          phone: "222555666",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mealId: 11,
          seats_to_reserve: 4,
          first_name: "John",
          last_name: "Doe",
          email: "johndoe@hotmail.com",
          phone: "666555444",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mealId: 21,
          seats_to_reserve: 4,
          first_name: "John",
          last_name: "Doe",
          email: "johndoe@hotmail.com",
          phone: "666555444",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mealId: 31,
          seats_to_reserve: 4,
          first_name: "John",
          last_name: "Doe",
          email: "johndoe@hotmail.com",
          phone: "666555444",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Reservations", null, {});
  },
};
