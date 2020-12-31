'use strict';
module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define('Asset', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    marketCap: DataTypes.INTEGER,
    rating: DataTypes.STRING
  }, {});
  Asset.associate = function(models) {
    // const assetWatchlist = {
    //   through :
    // } //CREATE JOINS TABLE MANY TO MANY WITH WATCHLIST

    Asset.belongsTo(models.Portfolio, { foreignKey: 'portfolioId'})
    // Asset.belongsToMany(models.Watchlist, { foreignKey: 'watchlistId'})
  };
  return Asset;
};
