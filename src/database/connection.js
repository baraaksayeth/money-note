import { Sequelize } from "sequelize";
import logger from "../services/logger";
import env from "../config";

const sequelize = new Sequelize({
  database: env.DB_NAME,
  host: env.DB_HOST,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  dialect: env.DB_DIALECT,
  logging: msg => logger.debug(msg),
});

async function dbConnection() {
  try {
    await sequelize.authenticate();
  } catch (err) {
    throw err.message;
  }
}

export default sequelize;
export { dbConnection };
