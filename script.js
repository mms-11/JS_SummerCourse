function ValidaCPF(cpfEnviado) {

    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, ''); //metodo para eliminar simbolos não numericos de uma string

        }
    });
}

ValidaCPF.prototype.valida = function(){
   
    if(typeof this.cpfLimpo === 'undefined' || this.cpfLimpo.length !== 11 || this.isSequencia()) return false;
   const cpfParcial = this.cpfLimpo.slice(0,-2); //tira os 2 ultimos digitos da string
   const digito1 = this.criaDigito(cpfParcial);
   
  
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
   
   
    return true;
};


ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial); //gera array da string de cpfparcial
  
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => { //calculo da validaçao do cpf disponibilizado pelo governo
      ac += (regressivo * Number(val));
      regressivo--;
      return ac;
    }, 0);
  
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  };

//

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  };
  
  const cpf = new ValidaCPF('070.987.720-03');
  
  if(cpf.valida()) {
    console.log('Cpf válido');
  } else {
    console.log('Cpf inválido');
  }
  