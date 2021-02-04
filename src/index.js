import startServer from "./app";
import logger from "./services/logger";
import { dbConnection } from "./database/connection";

dbConnection()
  .then(() => startServer())
  .then(() =>
    logger.info("Database and server etabilished running successfully")
  )
  .catch(err => logger.error(err));
