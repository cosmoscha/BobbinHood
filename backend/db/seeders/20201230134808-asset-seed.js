"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Assets",
      [
        {
          portfolioId: 1,
          name: "Breadcrumb-rare",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          portfolioId: 1,
          name: "BurgerCrumb",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          portfolioId: 1,
          name: "Roach",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          portfolioId: 1,
          name: "SugarCube",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          portfolioId: 1,
          name: "Raid",
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
