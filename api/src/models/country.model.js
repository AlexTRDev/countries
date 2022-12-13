const { db, DataTypes } = require("../utils/database.util")

const Country = db.define("country", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  continent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capital: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sub_region: DataTypes.STRING,
  area: DataTypes.STRING,
  population: DataTypes.INTEGER
})

module.exports = { Country }