function aleatorio(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()*(max-min) + min);
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            if(typeof msg !== 'string'){
                reject('caiu no erro');
                return;
            }

            resolve(msg.toUpperCase() + 'passou na promise');
            return;
        },tempo);
    })
}

async function executa() { //para sincronizar a execução de cada promise

    try{
        const fase1 = esperaAi('fase 1', aleatorio());
        console.log(fase1);

        setTimeout(function(){
            console.log(fase1, 'essa promise tava pendente')
        }, 1100);

        const fase2 = await esperaAi('fase 2', aleatorio()); //espera a execução da promise2
        console.log(fase2);


        const fase3 = await esperaAi('fase 3', aleatorio()); //espera a execução da promise3
        console.log(fase3);

        console.log('fim');
    } catch(erro) {
        console.log(erro);
    }

}

executa();
