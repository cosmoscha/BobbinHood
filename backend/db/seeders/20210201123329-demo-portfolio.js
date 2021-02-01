"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Portfolios",
      [
        {
          userId: 1,
          costBasis: null,
          profit: null,
          percentage: null,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Portfolios", {}, {});
  },
};
