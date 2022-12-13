const express = require('express')
const { create } = require("../controllers/activity.controller")

const activityRouter = express.Router()

activityRouter.post("/", create)


module.exports = { activityRouter }