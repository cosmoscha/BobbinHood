'use strict';
module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define('Asset', {
    portfolioId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    marketCap: DataTypes.DECIMAL,
    rating: DataTypes.STRING
  }, {});
  Asset.associate = function(models) {
    const columnMapping = {
      through: 'assetWatchlist',
      otherKey: 'watchlistId',
      foreignKey: 'assetId'
  }
    Asset.belongsTo(models.Portfolio,{ foreignKey: 'portfolioId'})
    Asset.belongsToMany(models.Watchlist, columnMapping);
  };
  return Asset;
};
