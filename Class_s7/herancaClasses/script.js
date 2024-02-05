class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    } //funcao construtora

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado!`);
            return;
        }
        this.ligadon = true;
    }//método da classe (função de ligar)

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado!`);
            return;
        }
        this.ligadon = false;
    }
}



//CRIANDO HERANÇA!!!!!!!

class Smartphone extends DispositivoEletronico {
    constructor(nome,cor,modelo) {
        super(nome); //inclui todas as classes feitas no construtor original
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('iphone ', 'preto', 'x10');
console.log(s1);