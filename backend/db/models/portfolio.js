'use strict';
module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define('Portfolio', {
    assetId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    watchlistId: DataTypes.INTEGER,
    financialId: DataTypes.INTEGER
  }, {});
  Portfolio.associate = function(models) {
    Portfolio.hasMany(models.Asset, {foreignKey: 'portfolioId'})
    Portfolio.hasOne(models.Financial, {foreignKey: 'portfolioId'})
    Portfolio.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Portfolio;
};
