const mongoose = require("mongoose");

const todoConnection = mongoose
  .connect("mongodb://localhost:27017/todos")
  .then(() => {
    console.log("Connection with db is successful");
  })
  .catch((err) => console.log(err));

  
  module.exports = {todoConnection}