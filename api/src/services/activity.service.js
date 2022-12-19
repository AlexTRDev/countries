const { Activity, Country } = require("../models")

const createActivity = async ({ countriesIds, ...activity }) => {
  const activityInstance = await Activity.create(activity)

  // agregando datos a la trabla intermedia
  await activityInstance.addCountries(countriesIds)

  // Traemos toda la informacion incluida su tabla relacionada
  return await Activity.findByPk(activityInstance.id, {
    include: Country
  })
}

const getAllActivities = async () => {
  return await Activity.findAll({
    include: Country
  })
}

module.exports = { createActivity, getAllActivities }