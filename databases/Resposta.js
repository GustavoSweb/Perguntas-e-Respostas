const sequelize = require('sequelize')
const connection = require('./databases')
const resposta = connection.define('respostas', {
  resposta: {
    type: sequelize.TEXT,
    allowNull: false
  },
  perguntaId: {
    type: sequelize.INTEGER,
    allowNull: false
  }
})
resposta.sync({force: false})
module.exports = resposta
