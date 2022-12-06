const express = require("express")

const { getAllCountries, getCountryById, bulkCreateCountries } = require("../controllers/country.controller")


const countryRouter = express.Router()

countryRouter.get("/", getAllCountries)
countryRouter.get("/:idPais", getCountryById)
countryRouter.post("/data", bulkCreateCountries)

module.exports = {
  countryRouter
}