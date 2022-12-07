const { Op } = require("../utils/database.util")
const { Country } = require("../models")

//logica
const getAll = async () => {
  return await Country.findAll()
}

const getById = async (id) => {
  return await Country.findByPk(id)
}

const getByName = async (name) => {

  return await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`
      }
    }
  })
}

module.exports = {
  getAll,
  getById,
  getByName
}