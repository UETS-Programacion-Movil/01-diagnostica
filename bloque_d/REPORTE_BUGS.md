# 🐛 Reporte de Bugs Encontrados y Corregidos (Bloque D)
**Estudiante:** Paulo Andrés Moreira Elías 
**Paralelo:** E1 | **Fecha:** 2/09/2026  

---

## 1. 🔍 Bug de HTML Encontrado (D1)
- **¿Qué fallaba?:** El styles estaba mal referenciado, el header no estaba cerrado, también nota 2 carecia de atributo id y el boton de envio faltaba identificador
- **Causa Raíz:** Al no tener ID JavaScript no podía localizar los elementos, y styles no se podía aplicar sin referenciarse bien, y al header estar abierto apacaraba todo
- **Solución Aplicada:** Se cambió y agregué id=nota2 y id=btn-calcular, el </header> y <link rel="stylesheet" href="estilos.css">

---

## 2. 🔍 Bug de CSS Encontrado (D2)
- **¿Qué fallaba?:** Se utilizaron propiedades y valores CSS inválidos o mal escritos, específicamente display: flexer;, align-item: center; y cursor: pointing-hand;
- **Causa Raíz:** Errores tipográficos y valores no estándar provocaron que el navegador ignorara dichas reglas, rompiendo la alineación de la página y el diseño del cursor
- **Solución Aplicada:** Se corrigieron los valores y nombres a las propiedades estándar: display: flex;, align-items: center; y cursor: pointer;

---

## 3. 🔍 Bug de JavaScript Encontrado (D3)
- **¿Qué fallaba?:** Un selector inválido, un selector erróneo para el botón, falta de conversión de texto a número, operadores matemáticos mal agrupados, y un error tipográfico en textContnt
- **Causa Raíz:** Esto generaba fallas al capturar datos del DOM, concatenación de cadenas en lugar de una suma aritmética, y un fallo al intentar pintar el resultado en pantalla
- **Solución Aplicada:** Se actualizaron los selectores a #nota2 y #btn-calcular, se añadió parseFloat() para los valores numéricos, se corrigió la fórmula matemática a (a + b) / 2 y se renombró correctamente a textContent

---

## 4. ✅ Verificación en Consola del Navegador (D5)
- [X] Presioné F12 en el navegador.
- [X] Fui a la pestaña **Console**.
- [X] Verifiqué que **NO aparezca ningún error en rojo**.
