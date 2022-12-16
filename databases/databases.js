const Sequelize = require("sequelize")

const connection = new Sequelize("projetone", "u0_a682", "123456", {
  host: "localhost",
  dialect: "mysql"
})
module.exports = connection;
