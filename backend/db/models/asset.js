"use strict";
module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define(
    "Asset",
    {
      portfolioId: DataTypes.INTEGER,
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
    const assetPortfolioMapping = {
      through: "assetPortfolio",
      otherKey: "portfolioId",
      foreignKey: "assetId",
    };
    Asset.belongsTo(models.Portfolio, assetPortfolioMapping);
    Asset.belongsToMany(models.Watchlist, watchlistMapping);
  };
  return Asset;
};
