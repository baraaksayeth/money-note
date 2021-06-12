import * as awilix from "awilix";
import CategoryService from "./services/category-service";
import db from "./database/models";
import logger from "./services/logger";
import generateUUID from "./helpers/uuid";

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

container.register({
  CategoryService: awilix.asClass(CategoryService),
  db: awilix.asValue(db),
  logger: awilix.asValue(logger),
  uuid: awilix.asValue(generateUUID),
});

export default container;
