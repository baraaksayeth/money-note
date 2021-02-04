class userService {
  constructor(sequelize, User, logger) {
    this.sequelize = sequelize;
    this.User = User;
    this.logger = logger;
  }

  async signup(data) {
    try {
      const [result, metadata] = await this.sequelize.query(
        "INSERT INTO `users` (id, email, name,  password) VALUES (:id, :email, :name, :password) ",
        {
          replacements: {
            id: data.id,
            email: data.email,
            name: data.name,
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

export default userService;
