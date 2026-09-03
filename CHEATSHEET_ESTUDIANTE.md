<<<<<<< HEAD
# Cheatsheet del Estudiante: ESP32 & Flujo Git

## 1. Convención de Commits Semánticos (Commitlint)
Para que el robot de GitHub Actions apruebe tu entrega con el **Check Verde**, tus commits deben usar esta estructura:

```bash
git commit -m "tipo(alcance): descripcion en minusculas"
```

| Prefijo | Significado | Ejemplo Práctico |
| :--- | :--- | :--- |
| `feat:` | Nueva funcionalidad o resolución de bloque | `git commit -m "feat(bloque1): implementar pull-down y leds"` |
| `fix:` | Corrección de error en código o fórmula | `git commit -m "fix(adc): corregir constante a 4095.0"` |
| `docs:` | Cambios en documentación o links de video | `git commit -m "docs(readme): agregar link screencast"` |
| `refactor:` | Limpieza u orden de código sin alterar lógica | `git commit -m "refactor: simplificar condicional if-else"` |

---

## 2. Pines GPIO Digitales (Entrada y Salida)
```cpp
void setup() {
  pinMode(23, OUTPUT); // Pin 23 (LED Rojo) enviará voltaje (3.3V o 0V)
  pinMode(22, OUTPUT); // Pin 22 (LED Verde) enviará voltaje
  pinMode(4, INPUT);   // Pin 4 (Pulsador) leerá voltaje digital
}

void loop() {
  int estado = digitalRead(4); // Lee HIGH (3.3V) o LOW (0V)
  
  if (estado == HIGH) {
    digitalWrite(23, HIGH);    // Enciende LED Rojo
    digitalWrite(22, LOW);     // Apaga LED Verde
  } else {
    digitalWrite(23, LOW);     // Apaga LED Rojo
    digitalWrite(22, HIGH);    // Enciende LED Verde
  }
}
=======
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
>>>>>>> 3f96c15cbb79881c4f69997e5aa98802ccbbeeb0
```

---

<<<<<<< HEAD
## 3. Resistencia Pull-Down (Evitar Estado Flotante)
Si conectas un botón directo al ESP32 sin resistencia, el pin queda en **"estado flotante"** (capta ruido electromagnético como una antena).
- Para solucionarlo, conectamos una resistencia de **$10\text{ k}\Omega$ a Tierra (GND)**.
- Así, el pin siempre lee `LOW` ($0\text{V}$) por defecto cuando está suelto.
- Al presionar el pulsador conectado a $3.3\text{V}$, el voltaje vence a la resistencia y el pin lee `HIGH` ($3.3\text{V}$).

---

## 4. ADC (Convertidor Analógico-Digital) de 12 Bits
El ESP32 tiene un ADC de **12 bits** ($2^{12} = 4096$ niveles posibles, del $0$ al $4095$).
- $0\text{V} \rightarrow 0$ (lectura ADC mínima)
- $1.65\text{V} \rightarrow 2047$ (mitad)
- $3.3\text{V} \rightarrow 4095$ (lectura ADC máxima)

**Fórmula de conversión matemática:**
```cpp
int lecturaADC = analogRead(34);

// Siempre dividir para 4095.0 (con punto decimal para división float)
float voltaje = lecturaADC * (3.3 / 4095.0);

Serial.print("ADC: ");
Serial.print(lecturaADC);
Serial.print(" -> Voltaje: ");
Serial.println(voltaje, 2);
```

---

## 5. Atajos Rápidos en VS Code & Wokwi
- **Compilar Firmware:** `Ctrl + Alt + B` (o botón de PlatformIO en barra inferior).
- **Iniciar Simulación:** `F1` ➔ `Wokwi: Start Simulator`.
- **Detener Simulación:** `F1` ➔ `Wokwi: Stop Simulator`.
=======
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
>>>>>>> 3f96c15cbb79881c4f69997e5aa98802ccbbeeb0
