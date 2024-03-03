const fs = require('fs').promises; //utilizar promises para sincronizar o tempo certo de abertura e leitura de arquivos
const { stat } = require('fs');
const path = require('path');
//funçao assíncrona ->fs.readdir

fs.readdir(path.resolve(__dirname))//vai retornar um aquivo
   .then(arquivo=>console.log(arquivo))
   .catch(e => console.log(e));

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname); //prevenir erros de envio
    const files = await fs.readdir(rootDir); //esperar ler o arquivo
    walk(files,rootDir) //função que caminha sobre esses arquvios lidos
}

async function walk(files,rootDir){
    for(let file of files){
        const fullPath = path.resolve(rootDir,file);
        const stats = await fs.stat(fullPath);//ver se o aruivo eh diretorio,retorna promessa ser executada
        console.log(file,stats.isDirectory());

        if(stats.isDirectory()){
            readdir(fullPath);
            continue;
        }
        if(! /\.html$/g.test(fullPath)) continue; //se for um arquivo html, pular
        console.log(fullPath);
    }
}
readdir();




// Example usage:
// const files = ['file1.txt', 'file2.html', 'subdirectory'];
// const rootDir = '/path/to/your/directory';
// walk(files, rootDir);

