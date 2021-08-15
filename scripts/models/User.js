import Sequelize from "sequelize";

class User {
  constructor() {
    this.id = {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    };
    this.name = Sequelize.STRING;
    this.email = {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    };
    this.password = Sequelize.STRING;
  }
}

const users = new User();

export { users };
