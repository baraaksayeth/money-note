import { migration } from "./models";
import logger from "../services/logger";

migration()
  .then(() => logger.info("Migration all table completely"))
  .catch(err => logger.error(err.message));
