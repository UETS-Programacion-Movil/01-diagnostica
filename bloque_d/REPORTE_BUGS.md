# 🐛 Reporte de Bugs Encontrados y Corregidos (Bloque D)
**Estudiante:** [William Ortiz]  
**Paralelo:** [E2] | **Fecha:** [01/09/2026]  

---

## 1. 🔍 Bug de HTML Encontrado (D1)
- **¿Qué fallaba?:** La hoja de estilos no cargaba, el `header` no cerraba correctamente y faltaban los identificadores del segundo campo y del botón.
- **Causa Raíz:** El enlace apuntaba a un archivo inexistente y el DOM no coincidía con los selectores usados por JavaScript.
- **Solución Aplicada:** Se enlazó `estilos.css`, se cerró `header` y se agregaron los ID `nota2` y `btn-calcular`.

---

## 2. 🔍 Bug de CSS Encontrado (D2)
- **¿Qué fallaba?:** El contenedor no aplicaba Flexbox, no se alineaba verticalmente y el cursor del botón era inválido.
- **Causa Raíz:** Se usaron los valores inexistentes `flexer`, `align-item` y `pointing-hand`.
- **Solución Aplicada:** Se corrigieron por `display: flex`, `align-items: center` y `cursor: pointer`.

---

## 3. 🔍 Bug de JavaScript Encontrado (D3)
- **¿Qué fallaba?:** El botón no ejecutaba el cálculo y el promedio se mostraba incorrectamente.
- **Causa Raíz:** Los selectores no coincidían con el HTML, los valores seguían siendo texto, la fórmula no agrupaba la suma y `textContent` estaba mal escrito.
- **Solución Aplicada:** Se corrigieron los selectores, se convirtieron las entradas con `parseFloat`, se usó `(a + b) / 2` y se escribió correctamente `textContent`.

---

## 4. ✅ Verificación en Consola del Navegador (D5)
- [✅] Presioné F12 en el navegador.
- [✅] Fui a la pestaña **Console**.
- [✅] Verifiqué que **NO aparezca ningún error en rojo**.
