const express = require("express");
const { todoConnection } = require("./db");
const todoHandler = require("./routeHandlers/todoHandler");
const app = express();
app.use(express.json());

//mongoose connection to the db

//app routing
todoConnection
  .then(() => {
    //app routing
    app.use("/todo", todoHandler);

    // Connection error handling
    function errHandler(err, req, res, next) {
      if (res.headersSent) {
        return next(err);
      }
      res.status(500).json({ error: err.message });
    }

    app.use(errHandler);

    app.listen(4000, () => {
      console.log("app is listening at port 4000");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });
