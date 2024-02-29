module.exports = class Cachorro{
    constructor(nome){
        this.nome = nome;
    }
    latir(){
        return "meu nome é " + this.nome;
    }
}