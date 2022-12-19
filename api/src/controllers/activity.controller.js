const { createActivity, getAllActivities } = require('../services/activity.service');
const { catchAsync } = require('../utils/catchAsync.util');

const create = catchAsync(async (req, res, next) => {
  const data = await createActivity(req.body)
  res.status(201).json({ data, status: "success" })
})

const getAll = catchAsync(async (req, res, next) => {
  const data = await getAllActivities()
  res.status(200).json({ data, status: "success" })

})

module.exports = { create, getAll }