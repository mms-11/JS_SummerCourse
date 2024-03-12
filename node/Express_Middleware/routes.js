
//aqui so faz o roteamento e chama o controlador para a aplicação
//middleware: nada mais que uma função no meio do caminho
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const secaoContato = require('./src/controllers/Contato')

function meuMiddleWare(req,res,next){

    //secoes sao utilizadas para salvar dados no lado do sevidor

    req.session = {nome: 'Mari', sobrenome: "melo"};

    console.log();
    console.log("passei em meuMiddleware.");
    console.log();
    next(); //necessario para executar a outra função home.controler.paginainicial
}

//ROTAS DA SEÇAO "HOME" DO NOSSO SITE
route.get('/',meuMiddleWare, homeController.paginaInicial,function(req,res,next){
    console.log("ainda estou aqui");
    console.log(`(ultimo middleware ) olha o que tem na req.session ${req.session.nome}`)
}); //rota para "pegar" formulário do servidor
route.post('/', homeController.trataPost); //metodo port de pegar form


//ROTAS DA SEÇAO "CONTATO" DO NOSSO SITE
route.get('/contato', secaoContato.paginaInicial);
module.exports = route;