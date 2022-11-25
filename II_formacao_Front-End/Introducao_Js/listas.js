console.log("Trabalhando com listas");

// const salvador = "Salvador";
// const saoPaulo = "São Paulo";
// const rioDeJaneiro = "Rio de Janeira";

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

// Adiciona um item na lista, "empurra" um novo valor
listaDeDestinos.push("Curitiba"); 

console.log("Destinos possíveis: ");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);
console.log(listaDeDestinos [1]);

// Remove um item da lista (posição do item a ser apagado,
// quantidade de itens apagado a partir desse indicação)
listaDeDestinos.splice( 2, 1);
console.log(listaDeDestinos);
