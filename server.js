//uso do express para criar e configurar o servidor
const express = require("express")
const server = express()

//criando rotas
server.get("/",function(req, res){
    return res.send("Resposta do server !")
})
server.listen(3000)
