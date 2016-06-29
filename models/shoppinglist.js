'use strict';
module.exports = function(sequelize, DataTypes) {
  var shoppinglist = sequelize.define('shoppinglist', {
    userId: DataTypes.INTEGER,
    food: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.shoppinglist.belongsTo(models.user);
      }
    }
  });
  return shoppinglist;
};