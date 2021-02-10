import usersRoute from "./user-route";

function setRoutes(route) {
  route.use("/users", usersRoute(route));
  route.use("/categories", usersRoute(route));
  return route;
}

export default setRoutes;
