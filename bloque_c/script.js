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

const inputNombre = document.querySelector('#input-nombre');
const btnSaludar = document.querySelector('#btn-saludar');
const btnLimpiar = document.querySelector('#btn-limpiar');
const mensajeResultado = document.querySelector('#mensaje-resultado');

function saludarEstudiante(nombre) {
  return `¡Hola, ${nombre}! Bienvenido a Programación Móvil.`;
}

if (btnSaludar && inputNombre && mensajeResultado) {
  btnSaludar.addEventListener('click', () => {
    const nombre = inputNombre.value.trim();
    if (nombre) {
      mensajeResultado.textContent = saludarEstudiante(nombre);
      mensajeResultado.style.color = '#15803D';
    } else {
      mensajeResultado.textContent = 'Por favor ingresa tu nombre.';
      mensajeResultado.style.color = '#B91C1C';
    }
  });
}

if (btnLimpiar && inputNombre && mensajeResultado) {
  btnLimpiar.addEventListener('click', () => {
    inputNombre.value = '';
    mensajeResultado.textContent = 'Esperando interacción...';
    mensajeResultado.style.color = '#000';
  });
}
