/**
 * ============================================================================
 * 🎓 EVALUACIÓN DIAGNÓSTICA — BLOQUE D: JAVASCRIPT CON ERRORES
 * ============================================================================
 */

function calcularPromedioNotas(a, b) {
  // BUG JS: Concatenación en vez de suma numérica
  return a + b / 2;
}

function procesarCalculo() {
  const input1 = document.querySelector("#nota1");
  // BUG JS: Selector incorrecto
  const input2 = document.querySelector("#nota_inexistente");
  const cajaResultado = document.querySelector("#resultado");

  // BUG JS: no convierte a número
  const val1 = input1.value;
  const val2 = input2.value;

  const promedio = calcularPromedioNotas(val1, val2);

  // BUG JS: error de sintaxis al asignar textContent
  cajaResultado.textContnt = "Promedio: " + promedio;
}

// BUG JS: Selector que no encuentra el botón
const boton = document.querySelector(".btn-calcular");
if (boton) {
  boton.addEventListener("click", procesarCalculo);
}
