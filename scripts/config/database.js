import Sequelize from "sequelize";
import chalk from "chalk";

const env = process.env.NODE_ENV === "development" ? "dev" : "prod";

// class Connection {
//   constructor() {
//     // configuration
//     const username = process.env.DB_USERNAME;
//     const password = process.env.DB_PASSWORD;
//     const config = {
//       host: "localhost",
//       dialect: "sqlite",
//       storage: "./scripts/database/db.sqlite",
//     };
//     const msg = `🗳️ ${chalk.blue(
//       " db"
//     )}     - database authentication was ${chalk.green("successfull")}`;
//     const database = new Sequelize(env, username, password, config);
//     // start database
//     (async () => {
//       try {
//         await database.sync();
//         await database.authenticate();
//         console.log(msg);
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   }
// }

class Connection {
  constructor() {
    // configuration
    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;
    const config = {
      host: "localhost",
      dialect: "sqlite",
      storage: "./scripts/database/db.sqlite",
    };
    const msg = `🗳️ ${chalk.blue(
      " db"
    )}     - database authentication was ${chalk.green("successfull")}`;
    this.database = new Sequelize(env, username, password, config);
    // start database
    (async () => {
      try {
        await this.database.sync();
        await this.database.authenticate();
        console.log(msg);
      } catch (error) {
        console.log(error);
      }
    })();
  }
}

const connection = new Connection().database;

export { connection };
