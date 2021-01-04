'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Assets', [
      {portfolioId: 1,
      name: 'Breadcrumb-rare',
      price: 4,
      marketCap: 3.4,
      rating: 'B',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {portfolioId: 1,
    name: 'BurgerCrumb',
    price: 6,
    marketCap: 7.4,
    rating: 'S',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {portfolioId: 1,
  name: 'Roach',
  price: 1,
  marketCap: 0.2,
  rating: 'D',
  createdAt: new Date(),
  updatedAt: new Date()
  },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Assets', {
    }, {});
  }
};
