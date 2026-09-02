# 🐛 Reporte de Bugs Encontrados y Corregidos (Bloque D)
**Estudiante:** [Mateo Lucero]  
**Paralelo:** [E2] | **Fecha:** [01/09/2026]  

---

## 1. 🔍 Bug de HTML Encontrado (D1)
- **¿Qué fallaba?:** El `header` no estaba cerrado y al segundo input le faltaba el `id`. Además, el botón no tenía el ID necesario.
- **Causa Raíz:** Algunas etiquetas y atributos estaban incompletos, por lo que el código no quedaba bien estructurado y JavaScript no podía seleccionar correctamente los elementos.
- **Solución Aplicada:** Cerré la etiqueta `header`, agregué `id="nota2"` al segundo input y `id="btn-calcular"` al botón.

---

## 2. 🔍 Bug de CSS Encontrado (D2)
- **¿Qué fallaba?:** Algunas propiedades de CSS estaban escritas incorrectamente, como `display: flexer`, `align-item` y `cursor: pointing-hand`.
- **Causa Raíz:** Los valores y nombres de las propiedades no eran válidos en CSS.
- **Solución Aplicada:** Cambié `flexer` por `flex`, `align-item` por `align-items` y `pointing-hand` por `pointer`.

---

## 3. 🔍 Bug de JavaScript Encontrado (D3)
- **¿Qué fallaba?:** El cálculo del promedio no funcionaba correctamente porque los elementos necesarios no estaban seleccionados con los IDs correctos.
- **Causa Raíz:** El segundo input y el botón no tenían los IDs que necesitaba JavaScript para trabajar con ellos.
- **Solución Aplicada:** Agregué los IDs correspondientes en el HTML y corregí el código JavaScript para obtener las notas, calcular el promedio y mostrar el resultado.

---

## 4. ✅ Verificación en Consola del Navegador (D5)
- [Listo ] Presioné F12 en el navegador.
- [Listo] Fui a la pestaña **Console**.
- [Listo] Verifiqué que **NO aparezca ningún error en rojo**.
