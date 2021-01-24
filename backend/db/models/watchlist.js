"use strict";
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define(
    "Watchlist",
    {
      invested: DataTypes.BOOLEAN,
    },
    {}
  );
  Watchlist.associate = function (models) {
    const assetWatchlistMapping = {
      through: "assetWatchlist",
      otherKey: "assetId",
      foreignKey: "watchlistId",
    };
    const usertWatchlistMapping = {
      through: "userWatchlist",
      otherKey: "userId",
      foreignKey: "watchlistId",
    };
    Watchlist.belongsToMany(models.Asset, assetWatchlistMapping);
    Watchlist.belongsToMany(models.User, usertWatchlistMapping);
  };
  return Watchlist;
};
