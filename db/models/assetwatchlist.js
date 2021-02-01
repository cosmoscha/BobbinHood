'use strict';
module.exports = (sequelize, DataTypes) => {
  const assetWatchlist = sequelize.define('assetWatchlist', {
    assetId: DataTypes.INTEGER,
    watchlistId: DataTypes.INTEGER
  }, {});
  assetWatchlist.associate = function(models) {
    // associations can be defined here
  };
  return assetWatchlist;
};