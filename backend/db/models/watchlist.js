'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    userId: DataTypes.INTEGER,
    assetId: DataTypes.INTEGER,
    invested: DataTypes.BOOLEAN
  }, {});
  Watchlist.associate = function(models) {
    const columnMapping = {
      through: 'assetWatchlist',
      otherKey: 'assetId',
      foreignKey: 'watchlistId'
  }
    Watchlist.belongsTo(models.User, {foreignKey: 'userId'})
    Watchlist.belongsToMany(models.Asset, columnMapping)
  };
  return Watchlist;
};
