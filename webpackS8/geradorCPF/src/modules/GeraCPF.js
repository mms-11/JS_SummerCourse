
import ValidaCPF from "./validacaoCPF";

export default class GeraCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random()*(max-min) + min));
    }

    formatado(cpf){
        //parte a primeira parte ternaria da string cpf e add ponto
        
      return (cpf.slice(0,3) + '.' 
        + cpf.slice(3,6) + '.'
        + cpf.slice(6,9) + '-' 
        + cpf.slice(9,11));
        
    }

    geraNovoCpf(){
        const cpfSemDigito = this.rand(); //chama a funcçao rand que retorna uma string aleatoria de numeros
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito); //chamar o metodo da classe importada para gerar o penultimmo digito do cpf
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito); //gerar o ultimo digito do cpf 
        const novoCpf = cpfSemDigito + digito1+digito2;
        return this.formatado(novoCpf); //retorna cpf formatado
    }
}
         