'use strict';

var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
       validate: {
          isEmail: {
            msg: 'Invalid Email Address'
          }
       }
    },
    password: {
      type: DataTypes.STRING,
        validate: {
          len: {
            args: [8, 89],
            msg: 'Password must be between 8 and 89 character'
          }
      }
    }, 
    name: {
      type: DataTypes.STRING,
       validate: {
        len: {
          args: [3, 254],
          msg: 'Name must be between 3 and 254 characters'
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      // models.user.belongsToMany(models.favorites, { through: 'favorites' });
      }
    },
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      },
      toJSON: function() {
        var jsonUser = this.get();
        delete jsonUser.password;

        return jsonUser;
      }
    },
    hooks: {
      beforeCreate: function(createdUser, options, cb) {
        var hash = bcrypt.hashSync(createdUser.password, 10)
        createdUser.password = hash;
        cb(null, createdUser);
      }
    }
  });
  return user;
};