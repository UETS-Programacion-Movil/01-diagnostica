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

const inputNombre = document.querySelector("#input-nombre");
const botonSaludar = document.querySelector("#btn-saludar");
const botonLimpiar = document.querySelector("#btn-limpiar");
const mensajeResultado = document.querySelector("#mensaje-resultado");

function procesarSaludo() {
  const nombre = inputNombre.value.trim();
  mensajeResultado.textContent = nombre
    ? `¡Hola, ${nombre}! Bienvenido al panel UETS.`
    : "Por favor, ingresa tu nombre.";
}

function limpiarFormulario() {
  inputNombre.value = "";
  mensajeResultado.textContent = "Esperando interacción...";
  inputNombre.focus();
}

botonSaludar.addEventListener("click", procesarSaludo);
botonLimpiar.addEventListener("click", limpiarFormulario);
