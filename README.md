# 🎓 Evaluación Diagnóstica: Prerrequisitos de Programación Móvil
### 3° Bachillerato Técnico en Informática — UETS (2026–2027)

> [!IMPORTANT]
> **Modelo Evaluativo Dual MIT (10.0 Puntos Total):**
> - **Bloque A (50% · 5.0 pts):** Código fuente en GitHub con pruebas superadas (`pnpm test`), TypeScript check limpio (`pnpm run check`), commits semánticos y entrega en Pull Request.
> - **Bloque B (50% · 5.0 pts):** Video Screencast demostrativo oral (3 a 5 min) con cámara y voz explicando la lógica, corriendo las pruebas en vivo y demostrando la consola F12 limpia.

> [!NOTE]
> **💡 Pruebas con Auto-Sync Inteligente (Cero Estrés de Rebase):**
> Cada vez que ejecutas `pnpm test` en tu computadora, tus archivos de prueba se sincronizan automáticamente con las pruebas oficiales de `main` en segundo plano. No te preocupes por hacer `git pull` ni `rebase`.

---

## 📺 Guía Maestra & Diapositivas en Vivo (Cloudflare Edge)

[![Ver Diapositivas en Vivo](https://img.shields.io/badge/Diapositivas_Interactivas-Ver_en_Línea-10B981?style=for-the-badge&logo=cloudflare)](https://uets-pm-portal.vgmiltonisaac.workers.dev/01-diagnostica/)

👉 **[Abrir Diapositivas en el Portal Oficial (Cloudflare Workers)](https://uets-pm-portal.vgmiltonisaac.workers.dev/01-diagnostica/)**  
👉 **[Ver Portal Principal de la Materia](https://uets-pm-portal.vgmiltonisaac.workers.dev/)**

- ⌨ **Navegación:** Teclas `[←]`, `[→]` o `[Espacio]`.
- 📺 **Pantalla Completa:** Presiona `[F]`.
- 🧠 **Quizzes Formativos:** Evaluaciones interactivas con retroalimentación instantánea.

---

## ❄️ 1. Setup Diario Anti-Deep Freeze (Obligatorio al sentarse)

Debido a que las computadoras del laboratorio cuentan con **Deep Freeze**, ejecuta estos comandos al iniciar sesión:

```bash
# 1. Configurar tu identidad exacta de GitHub (evita el error 'Author identity unknown'):
git config --global user.name "TU_USUARIO_GITHUB"
git config --global user.email "tu_correo_registrado@ejemplo.com"

# 2. Instalar / verificar pnpm globalmente:
npm install -g pnpm

# 3. Comprobar versiones de herramientas (Health Check):
node -v    # v20+ o v22+ LTS
git --version
pnpm -v
```

---

## 📁 Estructura del Repositorio

```text
01-diagnostica/
├── bloque_a/            # CE1: Lógica y Fundamentos de Java (Ejercicio1 a Ejercicio5)
├── bloque_b/            # CE2: Estructura y Maquetación Web (HTML5 + CSS3 Flexbox/Grid)
├── bloque_c/            # CE3: Interactividad con JavaScript y DOM (let/const, eventos)
├── bloque_d/            # CE4: Depuración Integradora y Triada Web (Corregir bugs y reporte)
├── tests/               # Suites de Autograding con Auto-Sync inteligente
├── CHEATSHEET_ESTUDIANTE.md # Guía rápida de comandos y sintaxis
├── index.html           # Presentación interactiva local
└── package.json
```

---

## 🥊 Los 4 Bloques Prácticos

### ☕ Bloque A: Lógica & POO en Java (CE1 · 1.00 pt)
Ubicado en `bloque_a/`. Debes resolver 5 ejercicios independientes:
- **`Ejercicio1.java`:** Declarar variables primitivas (`int`, `double`, `String`, `boolean`) e imprimir sus valores con `System.out.println()`.
- **`Ejercicio2.java`:** Lectura de dos números con `Scanner(System.in)` y cálculo de suma, resta, multiplicación y división.
- **`Ejercicio3.java`:** Condicional `if / else` para determinar si una persona es mayor de edad (`>= 18`).
- **`Ejercicio4.java`:** Bucle `for` incremental (1 al 20) y bucle `while` decremental (20 al 1).
- **`Ejercicio5.java`:** Función `calcularPromedio(double a, double b)` y definición de la clase `Estudiante`.
- **Comando de prueba:** `pnpm run start:01`

### 🌐 Bloque B: HTML5 Semántico & CSS3 Flexbox (CE2 · 1.00 pt)
Ubicado en `bloque_b/`. Construcción de una página web estructurada:
- **`index.html`:** Estructura semántica con `<header>`, `<main>`, `<section>` (o `<article>`) y `<footer>`.
- **`estilos.css`:** Vinculado con `<link rel="stylesheet" href="estilos.css">` en `<head>`.
- **Selectores & Layout:** Selectores de clase (`.`), ID (`#`), al menos 3 propiedades CSS y `display: flex` o `display: grid`.
- **Comando de prueba:** `pnpm run start:02`

### ⚡ Bloque C: JavaScript Moderno & Manipulación del DOM (CE3 · 1.00 pt)
Ubicado en `bloque_c/`. Interactividad y buenas prácticas modernas:
- **`index.html` + `script.js`:** Vinculación externa con `<script src="script.js"></script>`.
- **Cero `var`:** Uso exclusivo de `const` y `let`.
- **Funciones & DOM:** Función con nombre clásico, selección con `document.querySelector()` y alteración de `.textContent`.
- **Eventos:** Escuchadores de eventos mediante `addEventListener('click', ...)`.
- **Comando de prueba:** `pnpm run start:03`

### 🐛 Bloque D: Depuración Integradora & Reporte Técnico (CE4 · 1.00 pt)
Ubicado en `bloque_d/`. Depuración de la calculadora escolar rota:
- **HTML:** Corregir enlace CSS (`estilos.css`), cierre de `<header>` e `id="nota2"`.
- **CSS:** Corregir propiedades inválidas (`display: flex`, `cursor: pointer`).
- **JS:** Corregir selector (`#nota2`), conversión numérica con `parseFloat()` y propiedad `textContent`.
- **`REPORTE_BUGS.md`:** Documentar los bugs encontrados explicando el error, la causa raíz y la solución.
- **Navegador:** Consola de desarrollo (F12) 100% limpia sin errores en rojo.
- **Comando de prueba:** `pnpm run start:04`

---

## 🛠️ Comandos de Validación Local

```bash
# 1. Instalar dependencias:
pnpm install

# 2. Probar reto por reto:
pnpm run start:01   # Bloque A (Java/Lógica)
pnpm run start:02   # Bloque B (HTML/CSS)
pnpm run start:03   # Bloque C (JS/DOM)
pnpm run start:04   # Bloque D (Depuración)

# 3. Probar todos los retos juntos con Auto-Sync:
pnpm test
# (o también: pnpm run test:all)

# 4. Verificación de tipos TypeScript:
pnpm run check
```

---

## 🚀 Guía de Flujo Git & Entrega en Pull Request

### Paso 1: Fork & Clonado
1. En GitHub, pulsa el botón **Fork** en [`UETS-Programacion-Movil/01-diagnostica`](https://github.com/UETS-Programacion-Movil/01-diagnostica).
2. Clona **tu propio fork** (no el repositorio docente):
   ```bash
   git clone https://github.com/TU_USUARIO/01-diagnostica.git
   cd 01-diagnostica
   pnpm install
   ```

### Paso 2: Crear tu Rama de Entrega Personal
```bash
git checkout -b entrega/nombre-apellido
```

### Paso 3: Commits Semánticos (Conventional Commits)
```bash
git add -A
git commit -m "feat(bloque-a): resolver ejercicios de java y logica"
git commit -m "style(bloque-b): maquetar html semantico y flexbox"
git commit -m "feat(bloque-c): agregar interactividad dom con javascript"
git commit -m "fix(bloque-d): depurar triada web y completar reporte"
git push origin entrega/nombre-apellido
```

### Paso 4: Abrir el Pull Request
> [!WARNING]
> **⚠️ Regla Crítica de Rama para el PR:**  
> Al abrir el Pull Request en GitHub, verifica minuciosamente las ramas seleccionadas:  
> - **base repository:** `UETS-Programacion-Movil/01-diagnostica` · **base:** `main`  
> - **head repository:** `TU_USUARIO/01-diagnostica` · **compare:** `entrega/nombre-apellido`  
> *(Si dejas seleccionada la rama `main` de tu fork, GitHub mostrará 0 commits).*

### 💡 Guía de Entrega Parcial Salesiana: ¡Nunca te quedes con 0!
Si la clase concluye y no alcanzaste a terminar los 4 bloques:
1. Haz commit de tu avance: `git commit -m "feat: avance parcial"` y push a tu rama personal.
2. Abre el Pull Request normalmente.
3. **Graba tu Video Screencast (Bloque B):** Explica hasta dónde avanzaste, cuál fue la traba y qué conceptos sí dominaste.
4. **Beneficio:** Rescatas los **5.00 puntos completos de la sustentación oral** más la nota proporcional del código.

---

## 📹 Video Screencast Demostrativo (Bloque B · 5.0 pts)

Graba un video de **3 a 5 minutos** (YouTube No Listado / Google Drive Institucional / Loom):
1. **0:00 - 0:45:** Cámara encendida con tu rostro visible. Di tu nombre completo y paralelo (`3E1` o `3E2`).
2. **0:45 - 2:00:** Explica la lógica de Java (Bloque A) y la estructura HTML/CSS (Bloque B).
3. **2:00 - 3:15:** Explica la manipulación DOM (Bloque C) y los bugs corregidos (Bloque D).
4. **3:15 - 4:30:** Muestra tu terminal ejecutando `pnpm test` con todas las pruebas en verde y la consola del navegador limpia.
5. **Entrega:** Pega el enlace del video en el campo correspondiente de la descripción del Pull Request.

---

## ⚖️ Rúbrica de Calificación Dual MIT (10.0 Puntos)

| Bloque | Criterio de Logro | Ponderación |
| :--- | :--- | :---: |
| **Bloque A: Retos en GitHub** | 4 Retos superando la suite automatizada (`pnpm test`) | **4.0 pts** |
| **Bloque A: TypeScript Check** | `pnpm run check` con 0 errores | **0.5 pts** |
| **Bloque A: Flujo Git** | Commits semánticos y File Guard respetado | **0.5 pts** |
| **Bloque B: Sustentación Oral** | Dominio conceptual de Java, HTML5, CSS3, DOM y depuración | **2.5 pts** |
| **Bloque B: Demo en Vivo** | Ejecución de `pnpm test` en terminal y consola F12 limpia | **1.5 pts** |
| **Bloque B: Calidad Audiovisual** | Rostro visible en cámara, voz nítida y enlace pegado en PR | **1.0 pt** |
| **TOTAL** | **Calificación Consolidada de la Actividad** | **10.0 PTS** |

---

*Módulo Formativo: Aplicaciones Web y Móviles (Programación Móvil) — Unidad Educativa Técnico Salesiano (UETS) 2026–2027.*
