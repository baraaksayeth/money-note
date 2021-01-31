import { migration } from "./models";
import logger from "../services/logger";

migration()
  .then(() => logger.info("Miggration all database table success"))
  .catch(err => logger.error(err.message));
