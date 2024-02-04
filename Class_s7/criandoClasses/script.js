// CLASSE É A MESMA COISA QUE FUNÇÃIO CONSTRUTORA

class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){ // criando metodo
        console.log(`${this.nome} está falando`)
    }

    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}


const p1 = new Pessoa('Luiz', 'otavio');
console.log(p1);

//********************************/

//Comparando com funcao construtora!!!!!!!


function Pessoa2(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`);
}

const pesoa2 = new Pessoa2('mari', 'melo');