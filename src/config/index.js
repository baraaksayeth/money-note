import dotenv from "dotenv";
import configDB from "./database";

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  ...configDB(),
};
