
//so faz o roteamento e chama o controlador para a aplicação

const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const secaoContato = require('./src/controllers/Contato')

//ROTAS DA SEÇAO "HOME" DO NOSSO SITE
route.get('/', homeController.paginaInicial); //rota para "pegar" formulário do servidor
route.post('/', homeController.trataPost); //metodo port de pegar form


//ROTAS DA SEÇAO "CONTATO" DO NOSSO SITE
route.get('/contato', secaoContato.paginaInicial);
module.exports = route;