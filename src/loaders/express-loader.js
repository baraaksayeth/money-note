import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import HttpError from "../services/http-error";

export function errorMiddleware(app) {
  app.use((req, res, next) => {
    const error = new HttpError("Route not found", 404);
    throw error;
  });
  app.use((err, req, res, next) => {
    if (req.headerSent) {
      return next(err);
    }
    res
      .json({ message: err.message || "An Unknown Error" })
      .status(err.code || 500);
  });
}

export function loadMiddleware(app) {
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(cors());
  return app;
}
