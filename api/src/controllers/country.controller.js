const { catchAsync } = require("../utils/catchAsync.util")
const dataAPI = require("../data/dataCountries.json")
const { Country } = require("../models")
const { getAll, getById, getByName } = require("../services/country.service")
// controller solamente se encarga de recibir y responder las peticiones
const getAllCountries = catchAsync(async (req, res) => {
  const { name } = req.query
  let data
  if (name) {
    data = await getByName(name)
  } else {
    data = await getAll()
  }

  res.status(200).json({
    data,
    status: "success",
  })

})

const getCountryById = catchAsync(async (req, res, next) => {
  const { idPais } = req.params

  let data = await getById(idPais)

  if (data === null) res.status(404).json({ status: 'Not Found' })

  res.status(200).json({
    data,
    status: "success",
  })
})

// controller para llenar los datos de los paises por defecto
const bulkCreateCountries = catchAsync(async (req, res) => {

  let countries = dataAPI.map(country => {
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