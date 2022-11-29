const criarTarefa = (evento) => {
    // Previniu que o formulário enviasse o dado para algum lugar e mateve a informação sem dar um refresh na página
    evento.preventDefault();
    
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    // Para acessar a estilização da li
    tarefa.classList.add('task');
    // tamplate string (``)
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    lista.appendChild(tarefa);
    input.value = " ";
};

const novaTarefa = document.querySelector('[data-form-button]');

// console.log(novaTarefa);
novaTarefa.addEventListener('click', criarTarefa);

// CRIAR BOTÃO

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    
    botaoConclui.addEventListener('click', () => {
        console.log('fui clicado');
    });

    return botaoConclui;
}