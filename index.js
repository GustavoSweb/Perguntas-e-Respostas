const express = require("express")
const app = express ()
const bodyParser = require("body-parser")
const sequelize = require("sequelize")
const connection = require("./databases/databases")
const pergunta = require("./databases/Pergunta")
const Resposta = require("./databases/Resposta")

app.set("view engime", "ejs")
app.use(express.static("public"))

connection
.authenticate()
.then(() => {
  console.log("Deu certo a conexão!")

})
.catch((erro) => {
  console.log("Deu errado a conexão!\n erro: " + erro)
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res)=> {
  pergunta.findAll({raw: true, order:[['id', 'DESC']]}).then((perguntas)=> {
    
    res.render("index.ejs", {
      pergunta:perguntas
      
    })
  })
  
})
app.get("/perguntar", (req, res)=> {
  res.render("perguntar.ejs")
})
app.post("/salvar", (req, res)=> {
  const titulo = req.body.titulo
  const descricao = req.body.descricao
  
  pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(()=> {
    res.redirect("/")
  })
  
})
app.get("/pergunta/:id", (req, res)=> {
  pergunta.findOne({where: {id:req.params.id}}).then((post) => {
    
      if(post != undefined){
        Resposta.findAll({where: {perguntaId:req.params.id}, order:[['id','DESC']]
         
        }).then((respo)=> {
          
          res.render("pergunta.ejs", {
        pergunta: post,
        respo: respo
        
      })
        })
      
    }else{
      res.redirect("/")
    }
    
    
    
  })
})
app.post("/responder", (req, res)=> {
  Resposta.findOne({where:{resposta:req.body.resposta, perguntaId:req.body.id}}).then((resposta)=> {
    if(resposta == undefined && req.body.resposta != undefined && req.body.resposta != null){
      Resposta.create({
      resposta: req.body.resposta,
      perguntaId: req.body.id
     }).then(()=> {
      res.redirect("/pergunta/"+req.body.id)
  })
    }else{
      res.redirect("/pergunta/"+req.body.id)
    }
    
  })
  
})
const PORT = 8081
app.listen(PORT, ()=> {
  console.log("Servidor rodando! Port: "+ PORT)
})
