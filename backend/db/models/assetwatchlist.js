'use strict';
module.exports = (sequelize, DataTypes) => {
  const AssetWatchlist = sequelize.define('AssetWatchlist', {
    assetId: DataTypes.INTEGER,
    watchlistId: DataTypes.INTEGER
  }, {});
  AssetWatchlist.associate = function(models) {
    // associations can be defined here
  };
  return AssetWatchlist;
};