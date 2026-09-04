# 📋 Cheatsheet del Estudiante: Evaluación Diagnóstica
### Programación Móvil — 3° Bachillerato Técnico (UETS 2026-2027)

---

## ❄️ 0. Setup Diario Anti-Deep Freeze (Obligatorio)

```bash
# 1. Configurar tu identidad exacta de GitHub:
git config --global user.name "TU_USUARIO_GITHUB"
git config --global user.email "tu_correo_registrado@ejemplo.com"

# 2. Instalar pnpm de forma global si el sistema se reinició:
npm install -g pnpm

# 3. Comprobar versiones de herramientas (Health Check):
node -v    # Node 20+ o 22+ LTS
git --version
pnpm -v
javac --version # JDK 21+

# 4. Instalar dependencias del proyecto tras clonar:
pnpm install
```

---

## 🛠️ 1. Comandos de Verificación Local

```bash
# 🚀 Verificación Bloque por Bloque
pnpm run start:01   # Reto 01: Lógica y POO en Java (CE1 · 1.00 pt)
pnpm run start:02   # Reto 02: Estructura HTML5 y CSS3 Flexbox (CE2 · 1.00 pt)
pnpm run start:03   # Reto 03: Interactividad JavaScript y DOM (CE3 · 1.00 pt)
pnpm run start:04   # Reto 04: Depuración Triada y REPORTE_BUGS.md (CE4 · 1.00 pt)

# 🏆 Probar Todos los Retos con Auto-Sync Inteligente (4.00 pts)
pnpm test
# (o también: pnpm run test:all)

# 🛡️ Verificación Estricta de Tipos
pnpm run check
```

---

## 🚀 2. Flujo Git Paso a Paso & Conventional Commits

```bash
# 1. Crear tu rama personal antes de empezar:
git checkout -b entrega/nombre-apellido

# 2. Guardar avances por cada bloque completado con commits semánticos:
git add -A
git commit -m "feat(bloque-a): resolver 5 ejercicios de logica y java"
git commit -m "style(bloque-b): maquetar index.html semantico con flexbox"
git commit -m "feat(bloque-c): agregar eventos y logica dom en script.js"
git commit -m "fix(bloque-d): depurar calculadora y completar reporte de bugs"

# 3. Subir tu rama a tu fork en GitHub:
git push origin entrega/nombre-apellido
```

> [!WARNING]
> **⚠️ Regla Crítica de Rama para el Pull Request:**  
> Compara siempre:  
> - **base repository:** `UETS-Programacion-Movil/01-diagnostica` · **base:** `main`  
> - **head repository:** `TU_USUARIO/01-diagnostica` · **compare:** `entrega/nombre-apellido`

> [!TIP]
> **💡 Entrega Parcial Salesiana: ¡Nunca te quedes con 0!**  
> Si se acaba el tiempo, sube tu avance con `git push`, abre el PR y graba tu video explicando lo que lograste para rescatar los **5.00 puntos orales**.

---

## 📹 3. Requisitos del Video Screencast (Bloque B · 5.0 pts)

1. **Duración:** 3 a 5 minutos.
2. **Cámara:** Rostro visible en la pantalla (Loom, YouTube No Listado o Drive).
3. **Estructura Recomendada:**
   - **0:00 - 0:45:** Presentación (Nombre, Paralelo 3E1/3E2).
   - **0:45 - 2:00:** Explicación del Bloque A (Java/Lógica) y Bloque B (HTML5/CSS3).
   - **2:00 - 3:15:** Explicación del Bloque C (JS/DOM) y Bloque D (Bugs corregidos).
   - **3:15 - 4:15:** Ejecución en vivo de `pnpm test` en terminal.
   - **4:15 - 5:00:** Demostración en el navegador con la consola F12 limpia sin errores en rojo.
4. **Entrega:** Enlace pegado en la descripción del **Pull Request**.
