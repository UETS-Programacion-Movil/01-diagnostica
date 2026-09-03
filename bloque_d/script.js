/**
 * ============================================================================
 * 🎓 EVALUACIÓN DIAGNÓSTICA — BLOQUE D: JAVASCRIPT CORREGIDO
 * ============================================================================
 */

function calcularPromedioNotas(a, b) {
  // FIX JS: Operación matemática con paréntesis para prioridad
  return (a + b) / 2;
}

function procesarCalculo() {
  const input1 = document.querySelector("#nota1");
  // FIX JS: Selector corregido a #nota2
  const input2 = document.querySelector("#nota2");
  const cajaResultado = document.querySelector("#resultado");

  // FIX JS: Conversión numérica explícita con parseFloat
  const val1 = parseFloat(input1.value) || 0;
  const val2 = parseFloat(input2.value) || 0;

  const promedio = calcularPromedioNotas(val1, val2);

  // FIX JS: Typo corregido a textContent
  cajaResultado.textContent = "Promedio: " + promedio.toFixed(2);
}

// FIX JS: Selector por ID #btn-calcular para vincular el evento correctamente
const boton = document.querySelector("#btn-calcular");
if (boton) {
  boton.addEventListener("click", procesarCalculo);
}