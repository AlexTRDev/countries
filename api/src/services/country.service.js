const { Op } = require("../utils/database.util")
const { Country, Activity } = require("../models")

//logica
const getAll = async () => {
  return await Country.findAll({
    include: [{
      model: Activity,
      attributes: ["name"],
      through: { attributes: [] }
    }]
  })
}
// inculuir relacion sin atributos en la tabla intermedia
// {
//   include: [{
//     model: Activity,
//     attributes: ["name"],
//     through: { attributes: [] }
//   }]
// }
const getById = async (id) => {
  return await Country.findByPk(id, {
    include: Activity
  })
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