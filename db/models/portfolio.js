"use strict";
module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define(
    "Portfolio",
    {
      userId: DataTypes.INTEGER,
      costBasis: DataTypes.INTEGER,
      profit: DataTypes.INTEGER,
      percentage: DataTypes.DECIMAL,
    },
    {}
  );
  Portfolio.associate = function (models) {
    const assetPortfolioMap = {
      through: "AssetPortfolio",
      otherKey: "assetId",
      foreignKey: "portfolioId",
    };
    Portfolio.belongsTo(models.User, { foreignKey: "userId" });
    Portfolio.belongsToMany(models.Asset, assetPortfolioMap);
  };
  return Portfolio;
};
