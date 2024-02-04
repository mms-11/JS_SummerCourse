
const _velocidade = Symbol('velocidade');









class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        console.log('SETTER');

        if(typeof valor !== Number ) return;
        if( valor>= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){ //para acessar uma chave privada!!
          console.log(  'GETTER');
        return this[_velocidade];
    }

    acelerar(){
        
        if(this[_velocidade] >= 100) return;
        this[_velocidade] ++;
    }

    
    freiar(){
        
        if(this[_velocidade] <= 0 ) return;
        this[_velocidade] --;
    }
}

const c1 = new Carro('fusca');
for( let i = 0; i < 200; i++){
    c1.acelerar();
}

console.log(c1);
c1.velocidade; //getter
c1.velocidade = 99; //setter


//criar uma propriedade privada
//SYMBOL, UM TIPO DE DADO PRIMITIVO

//para achar a chave velocidade

class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        console.log(valor);
        this.nome = valor.shift();
        this.sobrenome = valor.join( ' ');
    }


}

const p1 = new Pessoa('mari', 'melo');
p1.nomeCompleto = 'Mari Melo dos Santos';
console.log(p1.nome);
console.log(p1.sobrenome);