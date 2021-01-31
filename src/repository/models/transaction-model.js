function TransactionModel(DataTypes, sequelize) {
  return sequelize.define(
    "Transaction",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["income", "spending"],
      },
      nominal: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      wallet_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Wallets",
          key: "id",
        },
      },
      category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
}

export default TransactionModel;
