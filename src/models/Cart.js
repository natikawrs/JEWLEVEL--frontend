module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      quantity: { type: DataTypes.INTEGER, defaultValue: 1 }
    },
    { underscored: true }
  );

  Cart.associate = (db) => {
    Cart.belongsTo(db.User, {
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });

    Cart.belongsTo(db.Product, {
      foreignKey: {
        name: "productId",
        allowNull: false
      }
    });
  };

  return Cart;
};
