function usersRoute(route) {
  route.get("/", (req, res) => res.json({ hellog: "hai" }));
  return route;
}

export default usersRoute;
