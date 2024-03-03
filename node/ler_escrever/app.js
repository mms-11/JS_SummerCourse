const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); //cria arquivo

//const escreve = require( './module/escreve')
console.log(caminhoArquivo);
const ler = require('./module/ler')

const pessoas = [
    {nome: 'joao'},
    {nome: 'maria'},
    

];

const json = JSON.stringify(pessoas, '',2);
//escreve(caminhoArquivo,json) // -> limpa e escreve

async function lerA(caminho){
   const leitura = await ler(caminhoArquivo); //espera a leitura completa do arquivo
   renderizaDados(leitura); //torna o arquivo um objeto js novamente
}

function renderizaDados(dados){
    dados = JSON.parse(dados); //convert json em objeto
    dados.forEach(element => {
        console.log(element.nome);
    });

}

lerA(caminhoArquivo);

