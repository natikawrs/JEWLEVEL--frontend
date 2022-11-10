module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    "Chat",
    {
      message: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true }
      },
      isSeen: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: { notEmpty: true }
      }
    },

    { underscord: true }
  );
  Chat.associate = (db) => {
    Chat.belongsTo(db.User, {
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });
  };
  return Chat;
};
