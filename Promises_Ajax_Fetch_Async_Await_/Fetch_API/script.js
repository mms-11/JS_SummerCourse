//melhoria para xmlhttp_request

//a fetch retorna por padrão uma promise
//dar fetch em uma página html retorna uma promise, o resultado dessa promise



//boa prática de programação, um evento para a pagina toda

document.addEventListener('click', e =>{
    const el = e.target; // para pegar o link
    const tag = el.tagName.toLowerCase(); //tag do link

    if(tag === 'a') { //se o elemento for um link
        e.preventDefault(); //prevenir o carregamento automatico da pagina
       carregaPagina(el);  //carregar o link 
    }

});

async function carregaPagina(el){
try {//tratar um possível erro de abrir página html
    const href = el.getAttribute('href');
    const response = await fetch(href); //esse await vai esperar o fetch(requisição http) ser feito e vai retornar uma promise
    

    if(response.status !== 200) {//se o status da promisse não for encontrado, então lançar erro
        throw new Error('Erro 404(Página não encontrada)');
    }
//se a página for encontrada
    const html = await response.text(); //então executar mais uma promise de capturar o texto da pagina html
    
    //mostrar o resultado na div do html
    carregaResultado(html);
    
} catch (error) {
    console.error(error);
}
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response;
}
