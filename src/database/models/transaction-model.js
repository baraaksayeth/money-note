export default function TransactionModel(sequelize, DataTypes) {
  const Transaction = sequelize.define(
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
          model: "users",
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
          model: "wallets",
          key: "id",
        },
      },
      category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
        },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Transaction.association = db => {
    db.User.hasMany(Transaction, { foreignKey: "user_id", as: "user" });
    Transaction.belongsTo(db.User, {
      foreignKey: "user_id",
    });

    db.Wallet.hasMany(Transaction, { foreignKey: "wallet_id", as: "wallet" });
    Transaction.belongsTo(db.Wallet, {
      foreignKey: "wallet_id",
    });

    db.Category.hasMany(Transaction, {
      foreignKey: "category_id",
      as: "category",
    });
    Transaction.belongsTo(db.Category, {
      foreignKey: "category_id",
      as: "transaction",
    });
  };
  return Transaction;
}
