const express = require("express")

const { getAllCountries, getCountryById, bulkCreateCountries } = require("../controllers/country.controller")
const { countryValidators } = require("../middlewares/countryValidators.middleware")


const countryRouter = express.Router()

// 
countryRouter.get("/", getAllCountries)
// 1er param = ruta o path
// 2do <-> (n-1 ) = middlewares
// n <-> ultimo parametro = controller
countryRouter.get("/:idPais", countryValidators, getCountryById)

// ruta para los datos por defecto de los paises
countryRouter.post("/data", bulkCreateCountries)

module.exports = {
  countryRouter
}