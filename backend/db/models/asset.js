'use strict';
module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define('Asset', {
    portfolioId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    marketCap: DataTypes.DECIMAL,
    rating: DataTypes.STRING
  }, {});
  Asset.associate = function(models) {
    Asset.belongsTo(models.Portfolio,{ foreignKey: 'portfolioId'})
    // Asset.belongsToMany(models.Watchlist, { foreignKey: 'watchlistId'})
  };
  return Asset;
};
