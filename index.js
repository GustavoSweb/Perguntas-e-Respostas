const express = require("express")
const app = express()
const path = require("path")
const PORT = process.env.PORT || 8081

app.use(express.static(path.resolve('public')))

app.get("/", (req, res)=> {
  res.sendFile(__dirname+"/index.html")
})
app.listen(8081,()=> {
  console.log("servidor rodando")
})
