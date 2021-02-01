'use strict';
module.exports = (sequelize, DataTypes) => {
  const AssetPortfolio = sequelize.define('AssetPortfolio', {
    assetId: DataTypes.INTEGER,
    portfolioId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  AssetPortfolio.associate = function(models) {
    // associations can be defined here
  };
  return AssetPortfolio;
};