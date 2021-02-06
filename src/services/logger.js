import winston from "winston";
import setDate from "../helpers/date-format";
import env from "../config";

function formatLogger() {
  return winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.printf(
      info =>
        `[${setDate("ddd, DD MMM YYYY HH:mm:ss")}] [${info.level}] : ${
          info.message
        }`
    )
  );
}

export default winston.createLogger({
  level: "debug",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: env.LOG_PATH,
    }),
  ],
  format: winston.format.combine(winston.format.colorize(), formatLogger()),
});
