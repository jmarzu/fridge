'use strict';
module.exports = function(sequelize, DataTypes) {
  var shoppinglist = sequelize.define('shoppinglist', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return shoppinglist;
};