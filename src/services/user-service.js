class UserService {
  constructor(sequelize, User, logger) {
    this.sequelize = sequelize;
    this.User = User;
    this.logger = logger;
  }

  async get(data, option = { queryManual: true }) {
    try {
      let result;
      if (option.queryManual) {
        result = await this.sequelize.query(
          "SELECT * FROM `users` WHERE `email` = :email",
          {
            replacements: { email: data.email },
            type: this.sequelize.QueryTypes.SELECT,
          }
        );
      } else {
        result = await this.User.findOne({ email: data.email });
      }
      return result;
    } catch (err) {
      throw err.message;
    }
  }

  async create(data) {
    try {
      const [result, metadata] = await this.sequelize.query(
        "INSERT INTO `users` (`id`, `email`, `name`,  `password`, `createdAt`, `updatedAt`) VALUES (:id, :email, :name, :password, now(), now()) ",
        {
          replacements: {
            id: data.id,
            email: data.email,
            name: data.email,
            password: data.password,
          },
        }
      );
      return result;
    } catch (err) {
      throw err.message;
    }
  }
}

export default UserService;
