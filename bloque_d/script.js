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

  const val1 = Number(input1.value);
  const val2 = Number(input2.value);

  const promedio = calcularPromedioNotas(val1, val2);

  cajaResultado.textContent = "Promedio: " + promedio;
}

const boton = document.querySelector("#btn-calcular");

if (boton) {
  boton.addEventListener("click", procesarCalculo);
}

