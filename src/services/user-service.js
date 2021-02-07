class UserService {
  constructor(sequelize, User, logger) {
    this.sequelize = sequelize;
    this.User = User;
    this.logger = logger;
  }

  async get(data, option = { queryManual: true, withoutPassword: true }) {
    try {
      let result;
      if (option.queryManual) {
        const query = option.withoutPassword
          ? "SELECT `id`, `email`, `name` FROM `users` WHERE `email` = :email"
          : "SELECT `id`, `email`, `name`, `password` FROM `users` WHERE `email` = :email";

        result = await this.sequelize.query(query, {
          replacements: { email: data.email },
          type: this.sequelize.QueryTypes.SELECT,
        });
      } else {
        result = await this.User.findOne({ email: data.email });
      }
      return result[0];
    } catch (err) {
      throw err.message;
    }
  }

  async create(data) {
    try {
      await this.sequelize.query(
        "INSERT INTO `users` (`id`, `email`, `name`,  `password`, `createdAt`, `updatedAt`) VALUES (:id, :email, :name, :password, now(), now()) ",
        {
          replacements: {
            id: data.id,
            email: data.email,
            name: data.name,
            password: data.password,
          },
        }
      );
    } catch (err) {
      throw err.message;
    }
  }

  async updateName(data) {
    try {
      await this.sequelize.query(
        "UPDATE `users` SET `name` = :name, `updatedAt` = now() WHERE `id` = :id AND `email` = :email",
        {
          replacements: {
            name: data.name,
            email: data.email,
            id: data.id,
          },
        }
      );
    } catch (err) {
      throw err.message;
    }
  }

  async resetPassword(data) {
    try {
      await this.sequelize.query(
        "UPDATE `users` SET `password` = :password, `updatedAt` = now() WHERE `id` = :id AND `email` = :email",
        {
          replacements: {
            password: data.password,
            email: data.email,
            id: data.id,
          },
        }
      );
    } catch (err) {
      throw err.message;
    }
  }
}

export default UserService;
