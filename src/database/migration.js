import db from "./models";
import logger from "../services/logger";

async function migration() {
  await db.sequelize.sync({ force: true });
}

migration()
  .then(() => logger.info("Migration all table completely"))
  .catch(err => logger.error(err.message));
