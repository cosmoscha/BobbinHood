'use strict';
module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define('Asset', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    marketCap: DataTypes.INTEGER,
    rating: DataTypes.STRING
  }, {});
  Asset.associate = function(models) {
    Asset.belongsTo(models.Portfolio, { foreignKey: 'portfolioId'})
    Asset.belongsTo(models.Watchlist, { foreignKey: 'watchlistId'})
  };
  return Asset;
};
