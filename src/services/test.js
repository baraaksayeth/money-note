import container from "../di-setup";
// import UserService from "./user-service";
// import sequelize, { dbConnection } from "../database/connection";
// import logger from "./logger";
// import db from "../database/models";
// import { generatePassword, verifyPassword } from "../helpers/password";
// import { signinToken, verifyToken } from "../helpers/token-auth";

// const userSerivce = new UserService(sequelize, User, logger);

// (async () => {
//   try {
//     await userSerivce.resetPassword({
//       email: "mbara4321@gmail.com",
//       id: "123123-123ksdfas-as",
//       password: "yoboseo",
//     });
// console.log(result);
// logger.error("hello");
// const password = await generatePassword("baraaksayeth123");
// console.log(password);
// const isValid = await verifyPassword(password, "baraaksayeth123");
// console.log(isValid);
// const token = await signinToken({ foo: "bar" }, "hello", {
//   expiressIn: "1h",
// });
// console.log(token);
// const decodeToken = await verifyToken(token, "hellos");
// console.log(decodeToken);
// await dbConnection();
//   } catch (err) {
//     logger.error(err);
//     console.log(err, 1);
//   }
// })();

const logger = container.resolve("logger");
const CategoryService = container.resolve("CategoryService");
const uuid = container.resolve("uuid");
async function hell() {
  // const data = await CategoryService.create({ name: "Category Test" });
  // const id = await uuid("v1");
  console.log(data);
}
hell();
