const criarTarefa = (evento) => {
    // Previniu que o formulário enviasse o dado para algum lugar e mateve a informação sem dar um refresh na página
    evento.preventDefault();
    
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    console.log(valor);
    input.value = " ";
};

const novaTarefa = document.querySelector('[data-form-button]');

// console.log(novaTarefa);
novaTarefa.addEventListener('click', criarTarefa);