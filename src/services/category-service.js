class CategoryService {
  constructor({ db, logger, uuid }) {
    this.Category = db.Category;
    this.logger = logger;
    this.sequelize = db.sequelize;
    this.uuid = uuid;
  }

  async create(data) {
    try {
      const [result] = await this.sequelize.query(
        "INSERT INTO `categories` (id, name, created_at, updated_at) VALUES (:id, :name, now(), now()) ",
        {
          replacements: { id: this.uuid(), name: data.name },
        }
      );
      return result;
    } catch (err) {
      throw err.message;
    }
  }

  async getAll(option = { queryManual: false }) {
    let data;
    if (option.queryManual) {
      data = await this.sequelize.query("SELECT * FROM categories", {
        type: this.sequelize.QueryTypes.SELECT,
      });
    } else {
      data = await this.Category.findAll();
    }
    return data;
  }
}

export default CategoryService;
