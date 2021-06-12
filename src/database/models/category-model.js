export default function CategoryModel(sequelize, DataTypes) {
  return sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      indexes: [{ unique: true, fields: ["name"] }],
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
}
