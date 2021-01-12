import winston from "winston";
import setDate from "../helpers/date-format";
import env from "../config";

function createLogger(route, logData) {
  return winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: `./app.log`,
      }),
    ],
    format: winston.format.combine(
      winston.format.printf(info => {
        let message = `${setDate(
          "ddd, DD MMM YYYY HH:mm:ss"
        )} | ${info.level.toUpperCase()} | ${env.LOG_PATH} | ${
          info.message
        } | `;

        message += info.obj ? `data: ${JSON.stringify(info.obj)} | ` : "";
        message += logData ? `log_data: ${JSON.stringify(logData)} |` : "";

        return message;
      }),
      winston.format.colorize()
    ),
  });
}

class LoggerService {
  constructor(route) {
    this.route = route;
    this.logData = null;
    this.logger = createLogger(this.route, this.logData);
  }

  setLogData(logData) {
    const lengthLogData = Object.keys(logData).length;
    this.logData = lengthLogData === 0 ? null : logData;
  }

  async info(message, obj = null) {
    this.logger.log("info", message, { obj });
  }

  async debug(message, obj = null) {
    this.logger.log("debug", message, { obj });
  }

  async error(message, obj = null) {
    this.logger.log("error", message, { obj });
  }
}

const logger = new LoggerService(env.LOG_PATH);
export default logger;
