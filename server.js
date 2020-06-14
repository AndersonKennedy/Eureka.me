//uso do express para criar e configurar o servidor
const express = require("express")
const server = express()

//variaveis
const ideas = [
    {
        img:"/img/code.png",
        title:"Curso de programação",
        category:"Estudo",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, cumque dignissimos et tempora fugit laudantium odio debitis delectus veniam veritatis. Hic, obcaecati!",
        url:"https://facebook.com",
    },
    {
        img:"/img/design.png",
        title:"Curso de Design",
        category:"Design",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, cumque dignissimos et tempora fugit laudantium odio debitis delectus veniam veritatis. Hic, obcaecati!",
        url:"https://facebook.com",
    },
    {
        img:"/img/extreme.png",
        title:"Extreme 21",
        category:"Fitness",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, cumque dignissimos et tempora fugit laudantium odio debitis delectus veniam veritatis. Hic, obcaecati!",
        url:"https://facebook.com",
    },
    {
        img:"/img/code.png",
        title:"Curso de programação",
        category:"Estudo",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, cumque dignissimos et tempora fugit laudantium odio debitis delectus veniam veritatis. Hic, obcaecati!",
        url:"https://facebook.com",
    }
]

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

    const reverseIdeas = [...ideas].reverse()//extraindo   
    let lastIdeas = []
    for (let idea of reverseIdeas){
        if (lastIdeas.length < 3) {
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", {lastIdeas})
})

server.get("/ideias",function(req, res){
    const reverseIdeas = [...ideas].reverse()  
    return res.render("ideias.html",{ ideas: reverseIdeas })
})

//ligar o servidor na porta 3000
server.listen(3000)