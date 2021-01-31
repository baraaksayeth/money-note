function categoryModel(DataTypes, sequelize) {
  return sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
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
    }
  );
}

export default categoryModel;
