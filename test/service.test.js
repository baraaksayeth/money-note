const container = require("../dist/di-setup").default;

const CategoryService = container.resolve("CategoryService");

describe("Category Service", () => {
  it("Create", () => {
    CategoryService.create({ name: "Category Test" })
      .then(val => console.log(val))
      .catch(err => console.log(err));
  });

  it("Get All", () => {
    CategoryService.getAll({ queryManual: true })
      .then(val => console.log(val))
      .catch(err => console.log(err));
  });
});
