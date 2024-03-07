const express = require('express');
const app = express(); //acrrega o express

//nessa código só vamos trabalhar com metodo get


//numa API:
// CRUD -> CREATE, READ, UPDATE, DELETE
//          Post,  Get, Put, Delete
app.use(express.urlencoded({
    extended: true
})) ;//tratar a requisição body do envio do post;

app.get('/', (requisicao,resposta) =>{

    resposta.send('hello world');
    // 1 porta eh referente a um processo rodando no servidor

}); //primeira rota

app.get('/testes/:idUsuarios?', (req,res) => {
    // criando uma nova chave do objeto, nessa caso criamos a chave idUsuarios
    //basta sobrepor o valor da chave na url na mesma posicao de idUsuario
    // com ? temos um parametro opcional
    console.log(req.params);
    // /profiles/3
    res.send('oi');


    // profiles/?chave1=maria && chave2=seila
    console.log(req.query);
    //podemos criar um objeto com suas chaves diretamente na url

}); //nova rota

app.get('/contato', (req,res)=>{
    res.send('obrigada por entrar em contato conosco')
}); //segunda rota


app.post('/', (req,res)=>{
    console.log(req.body);
    res.send('recebi a msg');
});
app.listen(3000, ()=>{
    console.log("acessar http://localhost:3000");
    console.log("servidor executanto na porta 3000");
});


