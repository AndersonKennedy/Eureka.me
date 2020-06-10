const express = require("express")
const server = express()
//console.log(server)
//console.log(express)
//"start": "nodemon server.js"

//Configurar arquivos estaticos (css,scripts,imagens)
server.use(express.static("public"))
server.get("/",function(req,res){
    return res.send("resposta do servidor")
})

server.listen(3000)

console.log('Feito')
