# 📋 Cheatsheet del Estudiante: Evaluación Diagnóstica
### Programación Móvil — 3° Bachillerato Técnico (UETS 2026-2027)

---

## 🛠️ 1. Comandos de Verificación Local

Ejecuta estos comandos en la terminal de VS Code para validar tu progreso:

```bash
# 🚀 Verificación Bloque por Bloque
pnpm run start:01   # Reto 01: Lógica y POO en Java (CE1 · 1.00 pt)
pnpm run start:02   # Reto 02: Estructura HTML5 y CSS3 Flexbox (CE2 · 1.00 pt)
pnpm run start:03   # Reto 03: Interactividad JavaScript y DOM (CE3 · 1.00 pt)
pnpm run start:04   # Reto 04: Depuración Triada y REPORTE_BUGS.md (CE4 · 1.00 pt)

# 🏆 Probar Todos los Retos Consolidados (4.00 pts)
pnpm run test:all

# 🛡️ Verificación Estricta de Tipos
pnpm run check
```

---

## 🚀 2. Flujo Git Paso a Paso & Conventional Commits

```bash
# 1. Crear tu rama personal antes de empezar:
git checkout -b entrega/tu-nombre-apellido

# 2. Guardar avances por cada bloque completado:
git add .
git commit -m "feat(bloque-a): resolver 5 ejercicios de logica y java"
git commit -m "style(bloque-b): maquetar index.html semantico con flexbox"
git commit -m "feat(bloque-c): agregar eventos y logica dom en script.js"
git commit -m "fix(bloque-d): depurar calculadora y completar reporte de bugs"

# 3. Subir tu rama a tu fork en GitHub:
git push origin entrega/tu-nombre-apellido
```

> [!TIP]
> **Commits Prohibidos (0 pts):** Evita mensajes como *"tarea"*, *"cambios"*, *"subiendo"* o *"commit final"*. Usa siempre prefijos semánticos (`feat:`, `fix:`, `style:`, `docs:`).

---

## 📹 3. Requisitos del Video Screencast (Bloque B · 5.0 pts)

1. **Duración:** Máximo 5 a 6 minutos.
2. **Cámara:** Rostro visible en la esquina en todo momento (Loom, Clipchamp u OBS).
3. **Estructura Recomendada:**
   - **0:00 - 0:45:** Presentación (Nombre, Paralelo E1/E2, 3° BGU).
   - **0:45 - 2:00:** Explicación del Bloque A (Java/Lógica) y Bloque B (HTML5/CSS3).
   - **2:00 - 3:30:** Explicación del Bloque C (JS/DOM) y Bloque D (Bugs corregidos).
   - **3:30 - 4:45:** Ejecución en vivo de `pnpm run test:all` en terminal.
   - **4:45 - 5:30:** Demostración en el navegador con la consola F12 limpia sin errores en rojo.
4. **Entrega:** Enlace público (Loom o YouTube No Listado) pegado en la descripción del **Pull Request**.
