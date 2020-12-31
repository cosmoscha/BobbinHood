'use strict';
module.exports = (sequelize, DataTypes) => {
  const Financial = sequelize.define('Financial', {
    costBasis: DataTypes.INTEGER,
    profit: DataTypes.INTEGER,
    percentage: DataTypes.DECIMAL
  }, {});
  Financial.associate = function(models) {
    Financial.belongsTo(models.Portfolio, { foreignKey: 'portfolioId'})
  };
  return Financial;
};
