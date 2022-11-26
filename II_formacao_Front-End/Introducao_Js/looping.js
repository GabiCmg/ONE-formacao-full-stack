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
let temPassagemComprada = false;
const destino = "Salvador";

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada);

let contador = 0;
let destinoExiste = false;
while ( contador < listaDeDestinos.length) {
    
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe.");
        destinoExiste = true;
        break; 

    } else {
        console.log("Destino não existe.");
        break;
    }

    contador++;
}

console.log("Destino existe:", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem!");
} else {
    console.log("Desculpe, tivemos um erro!");
}

for ( let i = 0 ; i < listaDeDestinos.length ; i++) {  
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break;
    } 
}