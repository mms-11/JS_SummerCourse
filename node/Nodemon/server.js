const express = require('express');
const app = express(); //acrrega o express

//nessa código só vamos trabalhar com metodo get


//numa API:
// CRUD -> CREATE, READ, UPDATE, DELETE
//          Post,  Get, Put, Delete


app.get('/', (requisicao,resposta) =>{

    resposta.send('hello world');
    // 1 porta eh referente a um processo rodando no servidor

}); //primeira rota
app.get('/contato', (req,res)=>{
    res.send('obrigada por entrar em contato conosco')
}); //segunda rota

app.listen(3000, ()=>{
    console.log("acessar http://localhost:3000");
    console.log("servidor executanto na porta 3000");
});


