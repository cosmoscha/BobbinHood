'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    userId: DataTypes.INTEGER,
    assetId: DataTypes.INTEGER,
    invested: DataTypes.BOOLEAN
  }, {});
  Watchlist.associate = function(models) {
    // Watchlist.hasMany(models.Asset, {foreignKey: 'watchlistId'})
    Watchlist.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Watchlist;
};
