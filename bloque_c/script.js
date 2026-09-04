const inputNombre = document.querySelector("#input-nombre");
const btnSaludar = document.querySelector("#btn-saludar");
const btnLimpiar = document.querySelector("#btn-limpiar");
const mensajeResultado = document.querySelector("#mensaje-resultado");

function generarSaludo(nombre) {
    if (nombre.trim() === "") {
        mensajeResultado.textContent = "Por favor, ingresa tu nombre.";
    } else {
        mensajeResultado.textContent = `¡Hola, ${nombre}! Bienvenido a la UETS.`;
    }
}

btnSaludar.addEventListener("click", function() {
    generarSaludo(inputNombre.value);
});

btnLimpiar.addEventListener("click", function() {
    inputNombre.value = "";
    mensajeResultado.textContent = "Esperando interacción...";
});
