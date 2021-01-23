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
    const assetPortfolioMapping = {
      through: "assetPortfolio",
      otherKey: "assetId",
      foreignKey: "portfolioId",
    };
    Portfolio.hasMany(models.Asset, assetPortfolioMapping);
    Portfolio.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Portfolio;
};
