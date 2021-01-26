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
        },
        {
          name: "BurgerMeat",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          name: "Roach",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          name: "SugarCube",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          name: "Raid",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          name: "Aphid",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          name: "Tomato",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          name: "Termite",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          name: "Squirrel",
          price: null,
          marketCap: null,
          rating: null,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Assets", {}, {});
  },
};
