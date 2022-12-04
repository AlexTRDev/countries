const { db, DataTypes } = require("../utils/database.util")

const Activity = db.define("activity", {
  name: DataTypes.STRING,
  dificulty: DataTypes.ENUM("1", "2", "3", "4", "5"),
  duration: DataTypes.STRING,
  season: DataTypes.ENUM("VERENO", "OTOÑO", "INVIERNO", "PRIMAVERA")
})

module.exports = { Activity }
