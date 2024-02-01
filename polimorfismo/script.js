function Conta(agencia,conta,saldo){ // classe = função construtora
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor){
        console.log('saldo insuficiente');
        this.mostrarSaldo();
        return;
    }

    this.saldo -= valor;
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.mostrarSaldo();
}

Conta.prototype.mostrarSaldo = function(){
    console.log(
        `Agencia/conta: ${this.agencia}/${this.conta} | saldo: ${this.saldo}`
    );

}


const conta1 = new Conta(11,22,15);
conta1.depositar(50);

//polimorfismo
 function ContaCorrente(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite;

 }

 ContaCorrente.prototype = Object.create(Conta.prototype);
 ContaCorrente.prototype.constructor = ContaCorrente;

 ContaCorrente.sacar = function(valor){
    if(this.saldo + this.limite < valor){
        console.log('saldo insuficiente');
        this.mostrarSaldo();
        return;
    }
    this.saldo -= valor;
    this.mostrarSaldo();
 }

 const cc = new ContaCorrente(11,22,40,20);
    cc.depositar(30);
    cc.sacar(200);


