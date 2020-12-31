'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Assets', [
      {name: 'Breadcrumb-rare',
      price: 4,
      marketCap: 3.4,
      rating: 'B',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {name: 'BurgerCrumb',
    price: 6,
    marketCap: 7.4,
    rating: 'S',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {name: 'Roach',
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