const { Activity, Country, User } = require("./index")
// 1 - 2 - 3
const initModels = () => {

   // Country n <=> m  Activity
   Country.belongsToMany(Activity, { through: "country_activity" })
   Activity.belongsToMany(Country, { through: "country_activity" })

   // User 1 <=> n Country
   User.belongsTo(Country)
   Country.hasMany(User)

};

module.exports = { initModels };
