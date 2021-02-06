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
          model: "User",
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
          model: "Wallet",
          key: "id",
        },
      },
      category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Category",
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
