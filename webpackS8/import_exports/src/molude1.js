const nome = 'Mari';
const sobrenome = 'Melo';
const idade = 21;

function soma(x,y){
    return x+y;
}

export{nome,sobrenome, idade, soma};

export class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export default function sub(a,b){
    return a -b;
};


