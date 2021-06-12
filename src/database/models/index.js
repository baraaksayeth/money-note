import Sequelize, { DataTypes } from "sequelize";
import sequelize from "../connection";
import CategoryModel from "./category-model";
import TransactionModel from "./transaction-model";
import WalletModel from "./wallet-model";
import UserModel from "./user-model";

const db = {};
db.Category = CategoryModel(sequelize, DataTypes);
db.User = UserModel(sequelize, DataTypes);
db.Wallet = WalletModel(sequelize, DataTypes);
db.Transaction = TransactionModel(sequelize, DataTypes);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

Object.keys(db).forEach(key => {
  if (db[key].association) {
    db[key].association(db);
  }
});

export default db;
