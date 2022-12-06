const { catchAsync } = require("../utils/catchAsync.util")
const data = require("../data/dataCountries.json")
const { Country } = require("../models")

const getAllCountries = catchAsync((req, res) => {

})

const getCountryById = (req, res) => { }

const bulkCreateCountries = catchAsync(async (req, res) => {

  let countries = data.map(country => {
    return {
      name: country?.name?.common || "None",
      image: country?.flags[0] || "None",
      continent: country?.continents?.[0] || "None",
      capital: country?.capital?.[0] || "None",
      sub_region: country?.subregion || "None",
      area: country?.area || "None",
      population: country?.population || 0
    }
  })

  const response = await Country.bulkCreate(countries)
  res.json(response)
})


module.exports = {
  getAllCountries,
  getCountryById,
  bulkCreateCountries
}