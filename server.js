//uso do express para criar e configurar o servidor
const express = require("express")
const server = express()

//Configurar arquivos estaticos
server.use(express.static("public"))

//criando rotas
server.get("/",function(req, res){
    return res.sendFile(__dirname + "/index.html")
})

server.get("/ideias",function(req, res){
    return res.sendFile(__dirname + "/ideias.html")
})

//ligar o servidor na porta 3000
server.listen(3000)
