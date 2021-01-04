'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Portfolios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // assetId: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {model:"Assets"}
      // },
      // userId: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {model:"Users"}
      // },
      // watchlistId: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {model:"Watchlists"}
      // },
      // financialId: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {model:"Financials"}
      // },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      costBasis: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      profit: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      percentage: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Portfolios');
  }
};
