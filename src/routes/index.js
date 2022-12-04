const express = require("express");
// import routers
const { userRouter } = require("./user.routes");

const routersApp = express.Router();
// route assignment
routersApp
   .use("/users", userRouter)

module.exports = { routersApp }