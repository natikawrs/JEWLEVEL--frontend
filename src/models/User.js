module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      street: {
        type: DataTypes.STRING,
        allowNull: true
      },
      subDistrict: {
        type: DataTypes.STRING,
        allowNull: true
      },
      district: {
        type: DataTypes.STRING,
        allowNull: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true
      },
      cardNumber: {
        type: DataTypes.STRING,
        allowNull: true
      },
      expiredDate: {
        type: DataTypes.STRING,
        allowNull: true
      },
      cvc: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    { underscored: true }
  );

  User.associate = (db) => {
    User.hasMany(db.Order, {
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    }),
      User.hasMany(db.Wishlist, {
        foreignKey: {
          name: "userId",
          allowNull: false
        }
      });
    User.hasMany(db.Cart, {
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });
  };

  return User;
};
