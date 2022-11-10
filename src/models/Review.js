module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      review: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    { underscored: true }
  );

  Review.associate = (db) => {
    Review.belongsTo(db.User, {
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });

    Review.belongsTo(db.Product, {
      foreignKey: {
        name: "productId",
        allowNull: false
      }
    });
  };

  return Review;
};
