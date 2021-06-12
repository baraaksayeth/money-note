export default function UserModel(sequelize, DataTypes) {
  const Wallet = sequelize.define(
    "Wallet",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Wallet.association = db => {
    db.User.hasMany(Wallet, { foreignKey: "user_id" });
    Wallet.belongsTo(db.User, { foreignKey: "user_id" });
  };

  return Wallet;
}
