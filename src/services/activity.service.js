const { Activity } = require("../models")

const createActivity = async (activity) => {
  const activityInstance = await Activity.create(activity)
  await activityInstance.addCountries(countriesIds)

  return activityInstance
}

module.exports = { createActivity }