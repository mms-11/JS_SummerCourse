const request = (obj) => {
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();

    xhr.open(obj.method, obj.url,true); //abrir um arquivo http com get, a url do obj e assíncrono
    xhr.send(); //por enquanto não vamos mandar nada

    //checar quando a requisição for carregada
    xhr.addEventListener('load', (event) =>{
        if(xhr.status >= 200 && xhr.status <= 300){
            resolve(xhr.responseText);
        } else{
            reject(xhr.statusText);
        }
    });
    });
};

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
    const href = el.getAttribute('href'); //extrair o link

    const objConfig = { //declarar e inicializar a construção do objeto
        method: 'GET', 
        url: href,
    };

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(e) {
        console.log(e);
    }

}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response;
}