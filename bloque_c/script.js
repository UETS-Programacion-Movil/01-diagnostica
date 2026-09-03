/**
 * ============================================================================
 * 🎓 EVALUACIÓN DIAGNÓSTICA — BLOQUE C: JAVASCRIPT & DOM (CE3)
 * ============================================================================
 * 
 * 📌 REQUERIMIENTOS:
 * C2. Declara variables usando exclusivamente 'let' y 'const' (NO usar 'var').
 * C3. Crea al menos una función nombrada (ej: function generarSaludo(...) { ... }).
 * C4. Selecciona un elemento del DOM con querySelector() o querySelectorAll()
 *     y modifica su contenido (.textContent o .innerHTML) o estilo.
 * C5. Agrega interactividad escuchando eventos con addEventListener()
 *     (por ejemplo al hacer click en #btn-saludar o #btn-limpiar).
 */

// TODO: C2. Selecciona los elementos del DOM necesarios con const
const inputNombre = document.querySelector("#input-nombre");
const btnSaludar = document.querySelector("#btn-saludar");
const btnLimpiar = document.querySelector("#btn-limpiar");
const mensajeResultado = document.querySelector("#mensaje-resultado");

// TODO: C3. Declara una función nombrada para procesar el saludo
function generarSaludo() {
    let nombre = inputNombre.value.trim();

    if (nombre === "") {
        mensajeResultado.textContent = "Por favor, ingresa tu nombre.";
    } else {
        mensajeResultado.textContent = "¡Hola, " + nombre + "! Bienvenido al panel.";
    }
}

// TODO: C4 y C5. Agrega los eventos addEventListener para actualizar la pantalla
btnSaludar.addEventListener("click", generarSaludo);

    btnLimpiar.addEventListener("click", function () {
        inputNombre.value = "";
        mensajeResultado.textContent = "Esperando interacción...";
 });
