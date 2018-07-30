'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};
