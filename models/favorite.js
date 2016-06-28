'use strict';
module.exports = function(sequelize, DataTypes) {
  var favorite = sequelize.define('favorite', {
    userID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    href: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.favorite.belongsTo(models.user);
      }
    }
  });
  return favorite;
};