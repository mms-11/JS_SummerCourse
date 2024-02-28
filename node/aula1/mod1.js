const nome = 'Mari';
const sobrenome = 'Melo';

const falaNome = () => {
    console.log(nome,sobrenome);
}

class Pessoa {
    constructor(nome) {
        this.nomeCompleto = 'MEU NOME É' + nome;
    }
}
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
module.exports.Pessoa = Pessoa;


console.log(module.exports);
