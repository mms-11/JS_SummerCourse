
//router do express serve pra separar nossas rotas num qrquivo só de rotas pra deixar o codigo mais organizado



const express = require('express');
const app = express(); //acrrega o express
const routes = require('./routes');


//numa API:
// CRUD -> CREATE, READ, UPDATE, DELETE
//          Post,  Get,    Put,   Delete

app.use(express.urlencoded({
    extended: true
})); //tratar a requisição body do envio do post;

app.use(routes); //inicializa as rotas do nosso site criadas no arquivo routes.js

app.listen(3000, ()=>{
    console.log("acessar http://localhost:3000");
    console.log("servidor executanto na porta 3000");
});


