const mongoose = require("mongoose");
const constants = require("./configs/constants");

const todoConnection = mongoose
  .connect(constants.mongoDbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection with db is successful");
  })
  .catch((err) => console.log(err));

module.exports = { todoConnection };