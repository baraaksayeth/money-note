import express from "express";
import { errorMiddleware, loadMiddleware } from "./loaders/express-loader";
import env from "./config";

function exitOnHandler(server) {
  async function exitHandler(option = {}) {
    await server
      .close()
      .then(() => console.log(`server exit`))
      .catch(e => console.log(`error when server exit in stack ${e.stack}`));

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
      console.log(`Server Running on port ${env.PORT}`);

      const originalClose = server.close.bind(server);
      server.close = () =>
        new Promise(resolveClose => resolveClose(originalClose));

      exitOnHandler(server);
      resolve(server);
    });
  });
}

export default startServer;
