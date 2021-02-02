class CategoryService {
  constructor(sequelize, Category, logger) {
    this.Category = Category;
    this.logger = logger;
    this.sequelize = sequelize;
  }

  async create(name) {
    try {
      const [data, metadata] = await this.sequelize.query(
        "INSERT INTO `categories` (id, name, createdAt, updatedAt) VALUES (:id, :name, now(), now()) ",
        {
          replacements: {
            id: "abc-adfd-efdasd12-ad",
            name,
          },
        }
      );
      return data;
    } catch (err) {
      throw err.message;
    }
  }

  async getAll(option = { queryManual: false }) {
    let data;
    if (option.queryManual) {
      data = await this.sequelize.query("SELECT * FROM categories");
    } else {
      data = await this.Category.findAll();
    }
    return data;
  }
}

export default CategoryService;
