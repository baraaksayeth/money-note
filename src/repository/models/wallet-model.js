function walletModel(DataTypes, sequelize) {
  return sequelize.define("Wallet", {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}

export default walletModel;
