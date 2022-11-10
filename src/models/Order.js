// module.exports = (sequelize, DataTypes) => {
//   const Order = sequelize.define(
//     "Order",
//     {
//       status: {
//         type: DataTypes.ENUM("TO SHIP", "TO RECEIVE", "COMPLETED", "CANCELLED"),
//         allowNull: false,
//         defaultValue: "TO SHIP",
//         validate: { notEmpty: true }
//       },
//       trackingNo: { type: DataTypes.STRING, allowNull: true }
//     },
//     { underscored: true }
//   );

//   Order.associate = (db) => {
//     Order.belongsTo(db.User, {
//       foreignKey: {
//         name: "userId",
//         allowNull: false
//       }
//     });
//   };

//   return Order;
// };

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      status: {
        type: DataTypes.ENUM("TO SHIP", "TO RECEIVE", "COMPLETED", "CANCELLED"),
        allowNull: false,
        defaultValue: "TO SHIP",
        validate: { notEmpty: true }
      },
      subTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      trackingNo: { type: DataTypes.STRING, allowNull: true },
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
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      subDistrict: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      district: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      expiredDate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      cvc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    { underscored: true }
  );

  Order.associate = (db) => {
    Order.belongsTo(db.User, {
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });

    Order.hasMany(db.OrderItem, {
      foreignKey: {
        name: "orderId",
        allowNull: false
      }
    });
  };

  return Order;
};
