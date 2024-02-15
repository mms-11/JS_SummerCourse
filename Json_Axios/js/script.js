fetch('pessoas.json') // abrir arquivo e retornar uma promise
    .then(response => response.json()) // transformar o arquivo em json e retornar uma promise
    .then(json => carregaElementosNaPagina(json)); // mostrar o arquivo na tela

// Note: pessoas.json is assumed to be an array of objects

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for (let pessoa of json) {
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}