const express = require("express");
// import routers
const { userRouter } = require("./user.routes");
const { countryRouter } = require("./country.routes")
const { activityRouter } = require("./activity.routes")

const routersApp = express.Router();
// route assignment
routersApp
   .use("/users", userRouter)
   .use("/countries", countryRouter)
   .use("/activities", activityRouter)

module.exports = { routersApp }