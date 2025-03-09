const inputAmigo = document.getElementById("Parcero");
const listaAmigos = [];
//console.log (inputAmigo.value);
const ulListaParceros = document.getElementById("listaParceros");

function agregarParcero() {
    listaAmigos.push(inputAmigo.value);
    console.log(listaAmigos);
}