module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },

      story: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      image1: {
        type: DataTypes.STRING,
        allowNull: true
      },
      image2: {
        type: DataTypes.STRING,
        allowNull: true
      },
      image3: {
        type: DataTypes.STRING,
        allowNull: true
      },
      image4: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },

    { underscored: true }
  );

  Product.associate = (db) => {
    Product.hasMany(db.OrderItem, {
      foreignKey: {
        name: "productId",
        allowNull: false
      }
    }),
      Product.hasMany(db.Review, {
        foreignKey: {
          name: "productId",
          allowNull: false
        }
      }),
      Product.hasMany(db.Wishlist, {
        foreignKey: {
          name: "productId",
          allowNull: false
        }
      });
    Product.hasMany(db.Cart, {
      foreignKey: {
        name: "productId",
        allowNull: false
      }
    });
  };

  return Product;
};
