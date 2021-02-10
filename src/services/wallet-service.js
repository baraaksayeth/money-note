class WalletService {
  constructor(sequelize, Wallet, logger) {
    this.sequelize = sequelize;
    this.Wallet = Wallet;
    this.logger = logger;
  }

  async getAll(data) {
    try {
      const result = await this.sequelize.query(
        "SELECT * FROM `wallets` WHERE `user_id` = :userId",
        {
          replacements: { userId: data.userId },
          type: this.sequelize.QueryTypes.SELECT,
        }
      );
      return result;
    } catch (err) {
      throw err.message;
    }
  }

  async create(data) {
    try {
      await this.sequelize.query(
        "INSERT INTO `wallets` (`id`, `user_id`, `name`, `createdAt`, `updatedAt`) VALUES (:id, :userId, :name, :date, :date)",
        {
          replacements: {
            id: data.id,
            userId: data.userId,
            name: data.name,
            date: data.date,
          },
        }
      );
    } catch (err) {
      throw err.message;
    }
  }

  async update(data) {
    try {
      await this.sequelize.query(
        "UPDATE `wallets` SET `name` = :name WHERE `id` = :id AND `user_id` = :userId",
        {
          replacements: {
            name: data.name,
            id: data.id,
            userId: data.userId,
          },
        }
      );
    } catch (err) {
      throw err.message;
    }
  }
}

export default WalletService;
