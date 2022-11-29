// Componente inicia com letra maiuscula
const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');

    botaoDeleta.classList.add('delete-button');
    botaoDeleta.innerText = 'Deletar';
    botaoDeleta.addEventListener('click', deletarTarefa)
    return botaoDeleta;
};

// Função
const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;

    const tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.remove();

    return botaoDeleta;
};

export default BotaoDeleta;