"use strict";
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define(
    "Watchlist",
    {
      userId: DataTypes.INTEGER,
      assetsList: DataTypes.BOOLEAN,
    },
    {}
  );
  Watchlist.associate = function (models) {
    const watchlistMap = {
      through: "assetWatchlist",
      otherKey: "assetId",
      foreignKey: "watchlistId",
    };
    Watchlist.belongsToMany(models.Asset, watchlistMap);
    Watchlist.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Watchlist;
};
