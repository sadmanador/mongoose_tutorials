const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  mongoDbConnection: process.env.MONGO_DB_CONNECTION,
};
