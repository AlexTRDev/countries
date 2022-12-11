const { Activity, Country } = require("../models")

const createActivity = async ({ countriesIds, ...activity }) => {
  const activityInstance = await Activity.create(activity)

  // agregando datos a la trabla intermedia
  await activityInstance.addCountries(countriesIds)

  // Traemos toda la informacion incluida su tabla relacionada
  const data = Activity.findByPk(activityInstance.id, {
    include: Country
  })
  return data
}

module.exports = { createActivity }