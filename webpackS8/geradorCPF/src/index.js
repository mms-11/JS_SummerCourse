
import './assets/css/style.css';
import GeraCPF from './modules/geraCPF';

function inicia(){
    const geradorCpf = new GeraCPF; //CRIAR INSTANCIA DO OBJETO GERADOR

    const gerador = document.querySelector('.gerador'); //selecionar class do html
    const cpf = geradorCpf.geraNovoCpf(); //chamar metodo de gerar cpf da classe importada
    console.log(cpf);
    gerador.innerHTML = cpf; //adicionar conteudo do cpf na div

}

inicia();