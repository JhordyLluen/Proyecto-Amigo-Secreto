// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista donde se van a almacenar los nombres
let Amigos =[]
function agregarAmigo() {
    //Obtener el nombre ingresado
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    //Si está vacío 
    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    // Validar si el nombre ya existe (insensible a mayúsculas)
    const existe = Amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase());
    if (existe) {
        alert("Ese nombre ya ha sido agregado");
        input.value = "";
        return;
    }
    //Agregar al array
    Amigos.push(nombre);


    //Dejar en limpio el campo
    input.value = "";
   
    mostrarAmigos() 
}

function mostrarAmigos() {
    // Obtener el elemento de la lista HTML
    const lista = document.getElementById("listaAmigos");

    //Limpiar la lista existente
    lista.innerHTML = "";

    // Recorrer el arreglo Amigos
    for (let i = 0; i < Amigos.length; i++) {
        // 4. Crear un nuevo <li> para cada amigo
        const item = document.createElement("li");
        item.textContent = Amigos[i];
        lista.appendChild(item);
    }

}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    const lista = document.getElementById("listaAmigos");

    // Validamos que haya al menos un amigo en el array
    if (Amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
    }

    // Ocultar la lista de amigos
    lista.innerHTML = "";

    // Se genera un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * Amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = Amigos[indiceAleatorio];

    // Mostrar el resultado en la lista HTML
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
