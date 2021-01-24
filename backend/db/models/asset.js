"use strict";
module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define(
    "Asset",
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      marketCap: DataTypes.DECIMAL,
      rating: DataTypes.STRING,
    },
    {}
  );
  Asset.associate = function (models) {
    const watchlistMapping = {
      through: "assetWatchlist",
      otherKey: "watchlistId",
      foreignKey: "assetId",
    };
    const PortfolioMapping = {
      through: "Portfolio",
      otherKey: "userId",
      foreignKey: "assetId",
    };
    Asset.belongsToMany(models.User, PortfolioMapping);
    Asset.belongsToMany(models.Watchlist, watchlistMapping);
  };
  return Asset;
};
