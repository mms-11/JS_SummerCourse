class ControleRemoto{
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() { //Método de instância
        this.volume += 2;
    }
    diminuirVolume(){ //Método de instância
        this.volume -= 2;
    }

    static trocarPilhas(){ //Método Estático, altera todas as instancias da classe
        //NAO TEM ACESSO AOS DADOS DA INSTANCIA
        console.log('trocar as pilhas de todos os controles da classe ControleRemoto');
    }//SEMPRE EXECUTADO AO GERAR UMA NOVA INSTANCIA DA CLASSE
}

const controle1 = new ControleRemoto('samsung');
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocarPilhas();

//console.log(controle1);
//console.log(ControleRemoto);
