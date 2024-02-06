//projetinho para validar cpfs 

class ValidaCpf{
    constructor(cpfOriginal){
        //para eliminar simbolos não numericos de uma string
        Object.defineProperty(this, 'cpflimpo', {
            value: cpfOriginal.replace(/\D+/g, ''),
            enumerable: true,
            writable: false,
            configurable: false,
        })
    }

    valida(){
        if(typeof this.cpflimpo !== 'string' || this.cpflimpo.length !== 11) return false;
        if(this.ehSequencia()) return false;
        this.geraNovoCpf();   

        return this.NovoCpf === this.cpflimpo;
    }
    ehSequencia(){//ver se o cpf é uma sequencia de numeros repetidos
        const sequencia = this.cpflimpo[0].repeat(11);
        return this.cpflimpo === sequencia;
    }
    geraNovoCpf(){
        //alterar os 2 ultimos digitos do cpf
        //tirar os ultimos digitos

        const cpfSemDigitos = this.cpflimpo.slice(0,-2);
        const digito1 = this.geraDigito(cpfSemDigitos);//usar o metodo de gerar digitos validos pelo algoritmo oferecido pelo Governo
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);//concatenar o o cpf original e gerar o segundo digito 
        this.NovoCpf = cpfSemDigitos + digito1 + digito2;

    }
    geraDigito(cpfSemDigitos){
        let total = 0;
        let regressivo = cpfSemDigitos.length +1;

        for(let numero of cpfSemDigitos){
            total += regressivo*Number(numero);
            regressivo--;
        }

        const digito = 11 -(total%11);//algoritmo do gov
        return (digito <= 9? String(digito) : '0');
    }

}
let cpf = new ValidaCpf('112.619.734-37');

if(cpf.valida()){
    console.log('cpf válido');

}else{
    console.log('cpf inválido');
}

