const express = require('express')
const { create, getAll } = require("../controllers/activity.controller")

const activityRouter = express.Router()

activityRouter.post("/", create)
activityRouter.get("/", getAll)


module.exports = { activityRouter }