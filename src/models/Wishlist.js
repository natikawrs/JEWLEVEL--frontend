module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define("Wishlist", {}, { underscored: true });

  Wishlist.associate = (db) => {
    Wishlist.belongsTo(db.User, {
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });

    Wishlist.belongsTo(db.Product, {
      foreignKey: {
        name: "productId",
        allowNull: false
      }
    });
  };

  return Wishlist;
};
