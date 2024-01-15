function MeuEscopo (){
    const formu = window.document.querySelector('.formulario')
    const resultado = window.document.querySelector('.resultado')
    const pessoas = [];

    let contador = 1;
    function recebeEventoForm(evento){
        evento.preventDefault();
        console.log(`Form não enviado de número ${contador}`);
        contador++;

        const nome = formu.querySelector('.nome')
        const sobrenome = formu.querySelector('.sobrenome')
        const peso = formu.querySelector('.peso')
        const altura = formu.querySelector('.altura')

        //window.console.log(nome.value, sobrenome,peso,altura)
       pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
       });
      console.log(pessoas);
      resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}
      
      </p>`
      resultado.innerHTML += `<p>${peso.value} ${altura.value}
      
      </p>`


    }
   console.log(formu)
   formu.addEventListener('submit', recebeEventoForm)
}

MeuEscopo();
