"use strict";
module.exports = (sequelize, DataTypes) => {
  const assetPortfolio = sequelize.define(
    "assetPortfolio",
    {
      assetId: DataTypes.INTEGER,
      portfolioId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {}
  );
  assetPortfolio.associate = function (models) {
    // associations can be defined here
  };
  return assetPortfolio;
};
