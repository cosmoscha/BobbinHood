"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Assets",
      [
        {
          name: "Breadcrumb",
          price: null,
          marketCap: null,
          rating: null,
          description: null,
        },
        {
          name: "BurgerMeat",
          price: null,
          marketCap: null,
          rating: null,
          description: null,
        },
        {
          name: "Roach",
          price: null,
          marketCap: null,
          rating: null,
          description: null,
        },
        {
          name: "SugarCube",
          price: null,
          marketCap: null,
          rating: null,
          description: null,
        },
        {
          name: "Raid",
          price: null,
          marketCap: null,
          rating: null,
          description: null,
        },
        {
          name: "Aphid",
          price: null,
          marketCap: null,
          rating: null,
          description: null,
        },
        {
          name: "Tomato",
          price: null,
          marketCap: null,
          rating: null,
          description: null,
        },
        {
          name: "Termite",
          price: null,
          marketCap: null,
          rating: null,
          description: null,
        },
        {
          name: "Squirrel",
          price: null,
          marketCap: null,
          rating: null,
          description: null,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Assets", {}, {});
  },
};
