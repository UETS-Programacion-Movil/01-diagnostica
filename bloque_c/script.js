const inputNombre = document.querySelector('#input-nombre');
const btnSaludar = document.querySelector('#btn-saludar');
const btnLimpiar = document.querySelector('#btn-limpiar');
const mensajeResultado = document.querySelector('#mensaje-resultado');

function generarSaludo() {
  const nombre = inputNombre.value.trim();

  if (nombre === '') {
    mensajeResultado.textContent = 'Por favor, escribe tu nombre.';
    return;
  }

  mensajeResultado.textContent = `¡Hola ${nombre}! Bienvenido(a) a la UETS.`;
}

btnSaludar.addEventListener('click', generarSaludo);

btnLimpiar.addEventListener('click', () => {
  inputNombre.value = '';
  mensajeResultado.textContent = 'Esperando interacción...';
  inputNombre.focus();
});
