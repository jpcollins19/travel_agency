const app = require("express").Router();

const {
  //   models: { User },
} = require("../db/postgres_info.js");

// app.get("/api/users", async (req, res, next) => {
//   try {
//     const users = await User.findAll();
//     res.send(users);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = app;
