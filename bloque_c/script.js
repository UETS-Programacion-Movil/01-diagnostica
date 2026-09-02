let inputNombre = document.querySelector("#input-nombre");
let btnSaludar = document.querySelector("#btn-saludar");
let btnLimpiar = document.querySelector("#btn-limpiar");
let mensaje = document.querySelector("#mensaje-resultado");

function generarSaludo(nombre) {
    return "Hola " + nombre + ", bienvenido al Panel Interactivo UETS";
}

btnSaludar.addEventListener("click", function() {
    let nombre = inputNombre.value;

    if (nombre == "") {
        mensaje.textContent = "Escribe tu nombre primero";
    } else {
        mensaje.textContent = generarSaludo(nombre);
    }
});

btnLimpiar.addEventListener("click", function() {
    inputNombre.value = "";
    mensaje.textContent = "Esperando interacción...";
});