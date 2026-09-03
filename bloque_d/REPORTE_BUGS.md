# 🐛 Reporte de Bugs Encontrados y Corregidos (Bloque D)
**Estudiante:** Mateo Coello  
**Paralelo:** E1 | **Fecha:** 02/09/2026  

---

## 1. 🔍 Bug de HTML Encontrado (D1)
- **¿Qué fallaba?:** El botón de cálculo no tenía atributo `id` y el segundo campo `<input>` carecía del atributo `id="nota2"`, impidiendo su selección en JavaScript.
- **Causa Raíz:** Inconsistencia entre la estructura HTML y las referencias requeridas por el archivo de script.
- **Solución Aplicada:** Se agregó `id="nota2"` al `<input>` del examen y se asignó `id="btn-calcular"` al botón de acción.

---

## 2. 🔍 Bug de CSS Encontrado (D2)
- **¿Qué fallaba?:** El layout no se alineaba correctamente en pantalla y el cursor no mostraba la mano al pasar sobre el botón.
- **Causa Raíz:** Valores inválidos en las reglas de CSS: `display: flexer;`, `align-item: center;` (sin la 's' final) y `cursor: pointing-hand;`.
- **Solución Aplicada:** Se corrigieron los nombres de las propiedades y sus valores por sintaxis válida de CSS3: `display: flex;`, `align-items: center;` y `cursor: pointer;`.

---

## 3. 🔍 Bug de JavaScript Encontrado (D3)
- **¿Qué fallaba?:** El botón no ejecutaba ninguna acción al hacer click; si se invocaba la función, concatenaba texto o realizaba mal el cálculo e intentaba escribir en una propiedad inexistente.
- **Causa Raíz:** 
  1. El selector `.btn-calcular` buscaba una clase inexistente en el botón.
  2. El selector `#nota_inexistente` devolvía `null`.
  3. Los valores `.value` eran cadenas y la fórmula `a + b / 2` violaba la jerarquía matemática (dividía solo `b`).
  4. Había un typo en la propiedad del DOM (`textContnt`).
- **Solución Aplicada:** 
  1. Se actualizó la selección del botón a `#btn-calcular` y del input a `#nota2`.
  2. Se envolvieron los valores en `parseFloat()`.
  3. Se corrigió la fórmula a `(a + b) / 2`.
  4. Se corrigió la asignación a `cajaResultado.textContent`.

---

## 4. ✅ Verificación en Consola del Navegador (D5)
- [x] Presioné F12 en el navegador.
- [x] Fui a la pestaña **Console**.
- [x] Verifiqué que **NO aparezca ningún error en rojo**.