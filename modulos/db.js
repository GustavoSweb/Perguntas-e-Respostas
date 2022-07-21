const Sequelize = require("sequelize")
const sequelize = new Sequelize("id17446853_teste", "id17446853_gustavo", "l?AG[~i9ns^6LO(M",{
  host: "files.000webhost.com",
  dialect: "mysql"
})
const chat = sequelize.define("chats", {
  chat:{
    type: Sequelize.STRING
  }
})

chat.sync({force: true}).then(()=> {
  console.log("fucionou")
}).catch((erro)=> {
  console.log("deu pau"+ erro)
})