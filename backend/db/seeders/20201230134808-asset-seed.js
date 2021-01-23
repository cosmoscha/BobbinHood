"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Assets",
      [
        {
          portfolioId: null,
          name: "Breadcrumb-rare",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          portfolioId: null,
          name: "BurgerCrumb",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          portfolioId: null,
          name: "Roach",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          portfolioId: null,
          name: "SugarCube",
          price: null,
          marketCap: null,
          rating: null,
        },
        {
          portfolioId: null,
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
