"use strict";
module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define(
    "Asset",
    {
      symbol: DataTypes.STRING,
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      marketCap: DataTypes.DECIMAL,
      rating: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  Asset.associate = function (models) {
    const watchlistMap = {
      through: "assetWatchlist",
      otherKey: "watchlistId",
      foreignKey: "assetId",
    };
    const PortfolioMap = {
      through: "AssetPortfolio",
      otherKey: "portfolioId",
      foreignKey: "assetId",
    };
    Asset.belongsToMany(models.Portfolio, PortfolioMap);
    Asset.belongsToMany(models.Watchlist, watchlistMap);
  };
  return Asset;
};
