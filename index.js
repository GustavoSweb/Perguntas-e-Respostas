
const express = require("express")
const app = express()
const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
// engine 
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//body pparser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//mongosse

mongoose.connect(process.env.SERVE, {
 useNewUrlParser: true,
 useUnifiedTopology: true
});
const user = new mongoose.Schema({ name: String})
const MyModel = mongoose.model('Test', user);

const gustavo = mongoose.model('Test')


app.post("/add", (req, res)=>{
  new gustavo({
    name: req.body.name
}).save().then(()=>{
    res.redirect("/")
  }).catch(()=> {
    res.send("Infelizmente acorreu um erro, por favor tente novamente.")
  })
})
app.get("/", (req, res)=>{
  
  new gustavo.find().then(function(post){
    res.render("home", {
      post:post
    })
  }).catch((erro)=> {
    res.send("Algo deu errado"+erro)
    
  })
  
})

app.listen(process.env.PORT || 27017, function(){
  console.log("Servidor onlne"+process.env.PORT || 2701)
})
