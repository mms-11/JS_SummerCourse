//buscar recursos que controle o tempo exato de quando vão ser retornados
//se na cadeia de promises ocorrer um erro, vai direto pro catch
//promises sao excutadas em paralelo
function esperaAi(msg,tempo){
    return new Promise((resolve,reject) => {//criando objeto promise
        if(typeof msg !== 'string') reject('nap eh string');
        
        setTimeout(()=> {
            resolve(msg);
        },tempo);
    });
}
function aleatorio(min,max){
    min*=min;
    max*=max;
    return Math.floor(Math.random()* (max-min)+min);
}

esperaAi('frase1',aleatorio(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('frase2', aleatorio(1,3)); //essa é a promise
}).then(resposta => {
    console.log(resposta);
})//executado logo apos resolve é executado
.catch( erro => {
    console.log('erro');
});