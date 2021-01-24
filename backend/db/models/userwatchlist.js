'use strict';
module.exports = (sequelize, DataTypes) => {
  const userWatchlist = sequelize.define('userWatchlist', {
    userId: DataTypes.INTEGER,
    watchlistId: DataTypes.INTEGER
  }, {});
  userWatchlist.associate = function(models) {
    // associations can be defined here
  };
  return userWatchlist;
};