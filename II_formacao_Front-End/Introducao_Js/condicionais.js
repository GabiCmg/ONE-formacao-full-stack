console.log("==========================");
console.log("| Trabalhando com listas |");
console.log("==========================\n");

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
    "Curitiba"
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

/*if (idadeComprador >= 18) {
    console.log("Comprador maior de idade.");
    listaDeDestinos.splice(1, 1);
} else if (estaAcompanhada) {
    console.log("Comprador está acompanhado.");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador menor de idade e não posso vender.");
}*/

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador menor de idade e não posso vender.");
}

console.log("\nEmbarque:");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar.");
}

console.log(listaDeDestinos);