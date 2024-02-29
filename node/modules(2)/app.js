const Cachorro = require('./B/C/D/mod');
const Pessoa = require('../z/mod2');

const cachorrinho = new Cachorro('dog');
const p = new Pessoa('mari');
console.log(p.nome);
cachorrinho.latir();

//nome dos caminhos completos:

console.log(__filename);
console.log(__dirname);
