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
  Portfolio.associate = function (models) {};
  return Portfolio;
};
