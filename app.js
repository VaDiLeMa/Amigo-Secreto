let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); 

    if (nombreAmigo === "") {
        alert("Inscriba un amigo :-(");
        return;
    }

    amigos.push(nombreAmigo);
    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();
}

function actualizarLista() {
    const listaAmigosUl = document.getElementById("listaAmigos");
    listaAmigosUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Lista de amigos vacia. ¡Agrega uno! 😊");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`; 

    
    setTimeout(() => {
        alert(`¡Excelente el amigo secreto es: 
             ${amigoSorteado}! `);
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("buttonAgregar").addEventListener("click", agregarAmigo);
    document.getElementById("buttonSortear").addEventListener("click", sortearAmigo);
});

