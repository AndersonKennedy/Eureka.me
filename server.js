//uso do express para criar e configurar o servidor
const express = require("express")
const server = express()

//Configurar arquivos estaticos
server.use(express.static("public"))

//configuração do Nunjacks: pacote que nos permite usar variavel no HTML
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
    express: server,
    noCache: true,
})


//criando rotas
server.get("/",function(req, res){
    const h1 = "Olá do Backend"
    return res.render("index.html",{ title: h1 })
})

server.get("/ideias",function(req, res){
    return res.render("ideias.html")
})

//ligar o servidor na porta 3000
server.listen(3000)