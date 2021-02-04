function userModel(DataTypes, sequelize) {
  return sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      name: {
        type: DataTypes.SRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      indexes: [{ unique: true, fields: "email" }],
    }
  );
}

export default userModel;
