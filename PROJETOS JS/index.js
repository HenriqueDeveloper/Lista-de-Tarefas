let BotaoAdd = document.getElementById("botao");
let input = document.getElementById("input-tabela");
let Tarefas = document.getElementById("tarefas");
let marcado = false;

BotaoAdd.addEventListener("click", function() {
    if (input.value != '') {
        var tarefa = document.createElement('p');
        Tarefas.appendChild(tarefa); 
        tarefa.innerText = '- ' + input.value; 
        input.value = '';
        
        tarefa.addEventListener('click', function() {
            if (marcado == false) {
                tarefa.style.textDecoration = 'line-through';
                marcado = true;
            } else {
                tarefa.style.textDecoration = '';
                marcado = false;
            }
        });
        
        tarefa.addEventListener('dblclick', function() { 
            Tarefas.removeChild(tarefa); 
        });
    }
});
