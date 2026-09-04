# 🎓 Evaluación Diagnóstica: Prerrequisitos de Programación Móvil
### 3° Bachillerato Técnico en Informática — UETS (2026–2027)

> [!IMPORTANT]
> **Modelo Evaluativo Dual MIT (10.0 Puntos Total):**
> - **Bloque A (50% · 5.0 pts):** Código fuente en GitHub validado por Autograding Bot en Pull Request.
> - **Bloque B (50% · 5.0 pts):** Video Screencast demostrativo oral (5 a 6 min) explicando la lógica y pruebas.

---

## 📺 Diapositivas Interactivas 16:9

Puedes proyectar y estudiar la presentación oficial directamente desde tu navegador:

👉 **[Ver Diapositivas en Vivo en GitHub Pages](https://uets-programacion-movil.github.io/01-diagnostica/)** *(o abre `index.html` localmente).*

- **Navegación:** Teclas `[←]`, `[→]` o `[Espacio]`.
- **Pantalla Completa:** Presiona `[F]`.
- **Quizzes Formativos:** Preguntas interactivas con retroalimentación instantánea.

---

## 📁 Estructura y Misiones del Taller Diagnóstico

```text
01-diagnostica/
├── bloque_a/            # CE1: Lógica y Fundamentos de Java (Ejercicio1 a Ejercicio5)
├── bloque_b/            # CE2: Estructura y Maquetación Web (HTML5 + CSS3 Flexbox/Grid)
├── bloque_c/            # CE3: Interactividad con JavaScript y DOM (let/const, eventos)
├── bloque_d/            # CE4: Depuración Integradora y Triada Web (Corregir bugs y reporte)
├── tests/               # Suites de Autograding y verificación local
├── CHEATSHEET_ESTUDIANTE.md
├── index.html           # Diapositivas interactivas Neo-Brutalistas
└── package.json
```

---

## 🥊 Los 4 Bloques a Resolver

### ☕ Bloque A: Lógica & POO en Java (CE1 · 1.00 pt)
Ubicado en `bloque_a/`. Debes resolver 5 ejercicios independientes sin funciones flecha:
- **`Ejercicio1.java`:** Declarar variables primitivas (`int`, `double`, `String`, `boolean`) e imprimir sus valores con `System.out.println()`.
- **`Ejercicio2.java`:** Lectura de dos números con `Scanner(System.in)` y cálculo de suma, resta, multiplicación y división.
- **`Ejercicio3.java`:** Condicional `if / else` para determinar si una persona es mayor de edad (`>= 18`).
- **`Ejercicio4.java`:** Bucle `for` incremental (1 al 20) y bucle `while` decremental (20 al 1).
- **`Ejercicio5.java`:** Función `calcularPromedio(double a, double b)` y definición de la clase `Estudiante`.
- **Comando de prueba:** `pnpm run start:01`

### 🌐 Bloque B: HTML5 Semántico & CSS3 Flexbox (CE2 · 1.00 pt)
Ubicado en `bloque_b/`. Construcción de una página estructurada:
- **`index.html`:** Estructura semántica con `<header>`, `<main>`, `<section>` (o `<article>`) y `<footer>`.
- **`estilos.css`:** Vinculado con `<link rel="stylesheet" href="estilos.css">` en `<head>`.
- **Selectores & Layout:** Uso de selectores de clase (`.`), ID (`#`), al menos 3 propiedades CSS y `display: flex` o `display: grid`.
- **Comando de prueba:** `pnpm run start:02`

### ⚡ Bloque C: JavaScript Moderno & Manipulación del DOM (CE3 · 1.00 pt)
Ubicado en `bloque_c/`. Interactividad y buenas prácticas modernas:
- **`index.html` + `script.js`:** Vinculación externa con `<script src="script.js"></script>`.
- **Cero `var`:** Uso exclusivo de `const` y `let`.
- **Funciones & DOM:** Función con nombre clásico (ej: `function procesarSaludo()`), selección con `document.querySelector()` y alteración de `.textContent`.
- **Eventos:** Escuchadores de eventos mediante `addEventListener('click', ...)`.
- **Comando de prueba:** `pnpm run start:03`

### 🐛 Bloque D: Depuración Integradora & Reporte Técnico (CE4 · 1.00 pt)
Ubicado en `bloque_d/`. Depuración de la calculadora escolar rota:
- **HTML:** Corregir enlace CSS (`estilos.css`), cierre de `<header>` e `id="nota2"`.
- **CSS:** Corregir propiedades inválidas (`display: flex`, `cursor: pointer`).
- **JS:** Corregir selector (`#nota2`), conversión numérica con `parseFloat()` y typo `textContent`.
- **`REPORTE_BUGS.md`:** Documentar los bugs encontrados explicando qué fallaba, la causa raíz y cómo se solucionó.
- **Navegador:** Consola (F12) 100% limpia sin errores en rojo.
- **Comando de prueba:** `pnpm run start:04`

---

## 🛠️ Comandos de Verificación Local

```bash
# 1. Instalar dependencias
pnpm install

# 2. Probar reto por reto
pnpm run start:01   # Bloque A (Java/Lógica)
pnpm run start:02   # Bloque B (HTML/CSS)
pnpm run start:03   # Bloque C (JS/DOM)
pnpm run start:04   # Bloque D (Depuración)

# 3. Probar todos los retos juntos
pnpm run test:all

# 4. Verificación de tipos TypeScript
pnpm run check
```

---

## 🚀 Guía de Flujo Git & Entrega en Pull Request

1. **Hacer Fork:** Clic en **Fork** en el repositorio oficial [`UETS-Programacion-Movil/01-diagnostica`](https://github.com/UETS-Programacion-Movil/01-diagnostica).
2. **Clonar tu Fork:**
   ```bash
   git clone https://github.com/TU-USUARIO/01-diagnostica.git
   cd 01-diagnostica
   ```
3. **Crear tu Rama de Trabajo:**
   ```bash
   git checkout -b entrega/tu-nombre-apellido
   ```
4. **Hacer Commits Semánticos (+0.50 pts):**
   ```bash
   git add .
   git commit -m "feat(bloque-a): resolver ejercicios de java y logica"
   git commit -m "style(bloque-b): maquetar html semantico y flexbox"
   git commit -m "feat(bloque-c): agregar interactividad dom con javascript"
   git commit -m "fix(bloque-d): depurar triada web y completar reporte"
   git push origin entrega/tu-nombre-apellido
   ```
5. **Abrir Pull Request:**
   - En GitHub, haz clic en **"Contribute" ➔ "Open pull request"**.
   - Título: `Entrega Diagnóstica - Tu Nombre y Apellido (3° BGU)`.
   - En la descripción, llena tus datos y pega el **enlace a tu video Screencast de 5 a 6 min**.
   - El **Autograding Bot** calificará tus tests automáticamente.

---

## 📊 Rúbrica de Calificación Dual MIT (10.0 Puntos)

| Criterio | Ponderación | Descripción |
| :--- | :--- | :--- |
| **Bloque A: Retos en GitHub** | **4.0 pts** | 1.0 pt por cada bloque superando la suite (`pnpm run test:all`). |
| **Bloque A: Verificación TS** | **0.5 pts** | Ejecución limpia de `pnpm run check` con 0 errores. |
| **Bloque A: Flujo Git** | **0.5 pts** | Commits semánticos convencionales y entrega ordenada en PR. |
| **Bloque B: Dominio Técnico** | **2.5 pts** | Explicación conceptual clara de Java, HTML/CSS, JS y depuración en video. |
| **Bloque B: Demostración en Vivo** | **1.5 pts** | Ejecución de `test:all` en terminal y consola F12 limpia en navegador. |
| **Bloque B: Calidad Audiovisual** | **1.0 pt** | Rostro visible en cámara, voz nítida y enlace público en la descripción del PR. |
| **TOTAL** | **10.0 PTS** | **Calificación Consolidada de la Actividad Diagnóstica.** |
