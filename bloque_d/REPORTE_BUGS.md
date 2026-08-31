# Reporte de Bugs

## 1. HTML
- **Qué fallaba:** Faltaba el `id="nota2"` en el segundo input y el botón no tenía `id="btn-calcular"`.
- **Causa:** El JavaScript no podía localizar esos elementos con `querySelector()`.
- **Solución:** Se corrigieron los IDs y se mantuvo la estructura básica del formulario.

## 2. CSS
- **Qué fallaba:** La propiedad `display` tenía un valor inválido y el cursor del botón estaba mal definido.
- **Causa:** El navegador no aplicaba bien el diseño y la interacción visual del botón.
- **Solución:** Se dejó `display: flex` en el contenedor principal y `cursor: pointer` en el botón.

## 3. JavaScript
- **Qué fallaba:** El código usaba un selector incorrecto, no convertía cadenas a números y tenía un error de escritura en `textContent`.
- **Causa:** Se estaban sumando textos y no se estaba actualizando el resultado correctamente.
- **Solución:** Se cambiaron los selectores, se usó `parseFloat()` y se corrigió la asignación a `textContent`.

## 4. Verificación
- Se revisó que la calculadora muestre el promedio al presionar el botón y que no aparezcan errores en la consola del navegador.