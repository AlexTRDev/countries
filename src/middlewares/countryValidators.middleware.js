const { param } = require("express-validator")
const { checkValidations } = require("./checkValidations.middlewares")

const countryValidators = [
  param("idPais")
    .isNumeric()
    .withMessage("idPais must be a number"),
  checkValidations
]

module.exports = {
  countryValidators
}