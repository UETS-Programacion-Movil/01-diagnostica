# 🐛 Reporte de Bugs Encontrados y Corregidos (Bloque D)
**Estudiante:** [Jason Zhagui] 
**Paralelo:** [E1] | **Fecha:** [02/09/2026]  

---

## 1. 🔍 Bug de HTML Encontrado (D1)
- **¿Qué fallaba?:** El formulario web presentaba tres fallos estructurales importantes: la etiqueta de apertura `<header>` carecía de su correspondiente etiqueta de cierre, el campo de texto (input) de la nota del examen quimestral no se vinculaba de forma accesible con su etiqueta descriptiva `<label>`, y el botón de acción principal no poseía un identificador único para interactuar con la lógica del sistema.
- **Causa Raíz:** 
1. Omisión de la etiqueta de cierre `</header>` al finalizar la sección del título.
2. Falta del atributo clave `id="nota2"` en la etiqueta `<input>` del examen, lo que rompía la referencia del atributo `for="nota2"` usado en el `<label>`.
3. Ausencia del atributo identificador `id` en la etiqueta `<button>`, imposibilitando la captura del elemento desde el archivo de scripts.
- **Solución Aplicada:** 
1. Se agregó formalmente la etiqueta de cierre `</header>` en la línea 16 para aislar el encabezado del cuerpo del formulario.
2. Se integró el atributo `id="nota2"` dentro de la etiqueta del segundo campo numérico, restaurando la accesibilidad y el correcto enfoque al dar clic sobre el texto descriptivo.
3. Se incorporó el atributo `id="btnCalcular"` a la etiqueta del botón de cálculo para permitir una vinculación directa y limpia con el escuchador de eventos de JavaScript.

---

## 2. 🔍 Bug de CSS Encontrado (D2)
- **¿Qué fallaba?:** La interfaz gráfica de la aplicación no se alineaba de forma simétrica ni vertical en el centro de la pantalla del navegador. Asimismo, al posicionar el puntero del ratón sobre el botón de cálculo, la interfaz visual no ofrecía ninguna respuesta de interactividad para el usuario.
- **Causa Raíz:** 
1. En el selector del cuerpo de la página (`body`), se utilizaron nombres inválidos según el estándar CSS: el valor `flexer` para la propiedad `display` y la palabra en singular `align-item` en lugar de la propiedad compuesta requerida.
2. En el selector del botón (`#btn-calcular`), se asignó la propiedad no admitida `pointing-hand` a la regla de estilo `cursor`.
- **Solución Aplicada:** 
1. Se corrigió el bloque del `body`, sustituyendo los errores sintácticos por `display: flex;` y `align-items: center;` respectivamente (Líneas 17 y 18).
2. Se modificó la línea 54 dentro de la declaración del botón, reemplazando el valor erróneo por la propiedad oficial estandarizada `cursor: pointer;`.

---

## 3. 🔍 Bug de JavaScript Encontrado (D3)
- **¿Qué fallaba?:** Al presionar el botón no ocurría nada en la interfaz. Internamente, el script fallaba al capturar el botón, seleccionaba un input inexistente, concatenaba las notas como texto en lugar de sumarlas matemáticamente, y provocaba un error de ejecución al intentar mostrar el resultado en la pantalla debido a una propiedad mal escrita.
- **Causa Raíz:** 
1. **Línea 9:** Falta de paréntesis para priorizar la suma de las notas y falta de conversión de tipos de datos, lo que generaba promedios erróneos o textos concatenados.
2. **Línea 15:** Uso de un selector ID erróneo (`#nota_inexistente`) que no correspondía con ningún elemento HTML.
3. **Líneas 19 y 20:** Lectura directa de `.value` obteniendo cadenas de texto (Strings) en lugar de valores numéricos (Numbers).
4. **Línea 25:** Error de ortografía tipográfico al escribir `textContnt` en lugar de la propiedad nativa `textContent`.5. **Línea 29:** Uso de un selector de clase (`.btn-calcular`) para un elemento que posee un identificador único (ID).
- **Solución Aplicada:** 
1. Se modificó la función de cálculo aplicando conversión explícita con `Number()` y agrupando la operación matemática con paréntesis: `return (Number(a) + Number(b)) / 2;`.
2. Se corrigió el selector del segundo input asignando el ID correcto de la interfaz: `document.querySelector("#nota2");`.
3. Se convirtió el texto capturado de los inputs a valores flotantes utilizando `parseFloat()` para asegurar cálculos matemáticos válidos.
4. Se corrigió la propiedad de inserción de texto en la línea 25 a su sintaxis válida: `cajaResultado.textContent`.
5. Se reemplazó el selector del botón para buscarlo mediante su ID correspondiente: `document.querySelector("#btn-calcular");`.

---

## 4. ✅ Verificación en Consola del Navegador (D5)
- [ ✅] Presioné F12 en el navegador.
- [ ✅] Fui a la pestaña **Console**.
- [ ✅] Verifiqué que **NO aparezca ningún error en rojo**.
