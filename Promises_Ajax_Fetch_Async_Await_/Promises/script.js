//buscar recursos que controle o tempo exato de quando vão ser retornados
//se na cadeia de promises ocorrer um erro, vai direto pro catch
//promises sao excutadas em paralelo
function esperaAi(msg,tempo){
    return new Promise((resolve,reject) => {//criando objeto promise
        if(typeof msg !== 'string') reject('nap eh string');
        
        setTimeout(()=> {
            resolve(msg + 'passei na promise!');
        },tempo);
    });
}


function aleatorio(min,max){
    min*=min;
    max*=max;
    return Math.floor(Math.random()* (max-min)+min);
}

/*esperaAi('frase1',aleatorio(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('frase2', aleatorio(1,3)); //essa é a promise
}).then(resposta => {
    console.log(resposta);
})//executado logo apos resolve é executado
.catch( erro => {
    console.log('erro');
}); */

//Promise.all , Promise.race, Promice.resolve , Promise.reject

const promises = [
  'Primeiro valor',
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  'Outro valor'
];

//promise.all -> executa todas as promessas

Promise.all(promises)
.then(function(valor){
    console.log(valor);//imprime o valor do resolve da promise
})
.catch(function(erro){
    console.log(erro);
});
//entregar o primeiro valor
Promise.race(promises)
.then(function(valor){
    console.log(valor);//imprime o valor do resolve da promise
})
.catch(function(erro){
    console.log(erro);
});

function baixaPagina() {
    const emCache = true;
    if(emCache){
        return Promise.resolve('Pagina em cache ok'); //quando da certo, para rejeitar com reject eh analogo
    }else{
        esperaAi('baixei a pagina', 3000);
    }
}

baixaPagina().then(dadosPagina =>{
    console.log(dadosPagina);
}).catch(erro => console.log(erro));