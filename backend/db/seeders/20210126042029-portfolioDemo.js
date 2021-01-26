"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Portfolios",
      [
        {
          userId: 4,
          costBasis: 4,
          profit: 4,
          percentage: 0.04,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Portfolios", {}, {});
  },
};
