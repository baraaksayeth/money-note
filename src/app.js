import express from "express";
import { errorMiddleware, loadMiddleware } from "./loaders/express-loader";
import logger from "./services/logger";
import env from "./config";

function exitOnHandler(server) {
  async function exitHandler(option = {}) {
    await server
      .close()
      .then(() => logger.info("Server Exit"))
      .catch(e => logger.error(`error when server exit in stack ${e.stack}`));

    if (option.exit) {
      process.exit();
    }
  }
  process.on("exit", exitHandler);
  process.on("SIGINT", exitHandler);
  process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
  process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));
  process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
}

function startServer() {
  const app = express();

  loadMiddleware(app);
  app.get("/anjay", (req, res) => res.json({ msl: "Ok" }));
  errorMiddleware(app);

  return new Promise(resolve => {
    const server = app.listen(env.PORT, () => {
      logger.info(`Server Running on PORT ${env.PORT}`);

      const originalClose = server.close.bind(server);
      server.close = () =>
        new Promise(resolveClose => resolveClose(originalClose));

      exitOnHandler(server);
      resolve(server);
    });
  });
}

export default startServer;
