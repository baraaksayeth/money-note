import { DataTypes } from "sequelize";
import sequelize from "../connection";
import categoryModel from "./category-model";
import transactionModel from "./transaction-model";
import walletModel from "./wallet-model";
import userModel from "./user-model";

const Category = categoryModel(DataTypes, sequelize);
const User = userModel(DataTypes, sequelize);
const Wallet = walletModel(DataTypes, sequelize);
const Transaction = transactionModel(DataTypes, sequelize);

Category.hasMany(Transaction, { foreignKey: "category_id" });
Transaction.belongsTo(Category, { foreignKey: "category_id" });

Wallet.hasMany(Transaction, { foreignKey: "wallet_id" });
Transaction.belongsTo(Category, { foreignKey: "wallet_id" });

User.hasMany(Wallet, { foreignKey: "user_id" });
Wallet.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Transaction, { foreignKey: "user_id" });
Transaction.belongsTo(User, { foreignKey: "user_id" });

async function migration() {
  await sequelize.sync({ force: true });
}

export { User, Category, Wallet, Transaction, migration };
