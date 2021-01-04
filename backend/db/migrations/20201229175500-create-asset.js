'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Assets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      portfolioId: {
        type: Sequelize.INTEGER,
        allowNull: false
        // references: {model:"Portfolios"}
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      marketCap: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      rating: {
        type: Sequelize.STRING(5),
        allowNull: false,
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
    return queryInterface.dropTable('Assets');
  }
};
