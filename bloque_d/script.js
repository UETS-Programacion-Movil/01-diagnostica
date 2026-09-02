/**
 * ============================================================================
 * 🎓 EVALUACIÓN DIAGNÓSTICA — BLOQUE D: JAVASCRIPT CON ERRORES
 * ============================================================================
 */

function calcularPromedioNotas(a, b) {
  return (a + b) / 2;
}

function procesarCalculo() {
  const input1 = document.querySelector("#nota1");
  const input2 = document.querySelector("#nota2");
  const cajaResultado = document.querySelector("#resultado");

  const val1 = parseFloat(input1.value);
  const val2 = parseFloat(input2.value);

  if (Number.isNaN(val1) || Number.isNaN(val2)) {
    cajaResultado.textContent = "Ingresa dos notas válidas.";
    return;
  }

  if (val1 < 0 || val1 > 10 || val2 < 0 || val2 > 10) {
    cajaResultado.textContent = "Las notas deben estar entre 0 y 10.";
    return;
  }

  const promedio = calcularPromedioNotas(val1, val2);

  cajaResultado.textContent = "Promedio: " + promedio.toFixed(2);
}

const boton = document.querySelector("#btn-calcular");
if (boton) {
  boton.addEventListener("click", procesarCalculo);
}
