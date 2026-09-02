
const inputNombre = document.querySelector('#input-nombre');
const btnSaludar = document.querySelector('#btn-saludar');
const btnLimpiar = document.querySelector('#btn-limpiar');
const mensajeResultado = document.querySelector('#mensaje-resultado');

function generarSaludo() {

    let nombre = inputNombre.value.trim();

    // Verificamos si el campo está vacío
    if (nombre === "") {
        mensajeResultado.textContent = "Por favor, ingresa un nombre válido.";
        mensajeResultado.style.color = "#DC2626";
    } else {
        mensajeResultado.textContent = `¡Bienvenido al Técnico Salesiano, ${nombre}!`;
        mensajeResultado.style.color = "#16A34A";
    }
}

function limpiarFormulario() {
    inputNombre.value = "";
    mensajeResultado.textContent = "Esperando interacción...";
    mensajeResultado.style.color = "#000000";
    inputNombre.focus();
}

btnSaludar.addEventListener('click', generarSaludo);

btnLimpiar.addEventListener('click', limpiarFormulario);

inputNombre.addEventListener('keypress', function (evento) {
    if (evento.key === 'Enter') {
        generarSaludo();
    }
});