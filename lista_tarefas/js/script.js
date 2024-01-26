const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas= document.querySelector('.tarefas');
console.log(inputTarefa);

inputTarefa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        if (!inputTarefa.value.trim()) return; // Check if input is empty or contains only whitespace
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

btnTarefa.addEventListener('click', function(event){

    if (!inputTarefa.value.trim()) return; 
    criaTarefa(inputTarefa.value);
});

function criaTarefa(input){
    const li = criaLi();
    li.innerText = input;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
}

function criaLi(){
    const li = document.createElement('li');
    return li;
}

//APAGAR FUNCOES

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';

    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'Apagar esta tarefa');

    li.appendChild(btnApagar);
}

document.addEventListener('click', function(event) {
    
    if(event.target.classList.contains('apagar') ){
        console.log('apagar clicado');
        event.target.parentElement.remove();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '');
        listaTarefas.push(tarefaTexto);
    }

    const tarefasJson = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJson);
    console.log(listaTarefas);

}

function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    console.log(tarefas);
}
addTarefasSalvas();

