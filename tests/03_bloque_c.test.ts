import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';

function banner(title: string) {
  console.log('\n' + '='.repeat(70));
  console.log(`🥊 ${title}`);
  console.log('='.repeat(70));
}

function assert(condition: boolean, message: string, tip: string) {
  if (condition) {
    console.log(`  ✅ [PASS] ${message}`);
  } else {
    console.error(`  ❌ [FAIL] ${message}`);
    console.error(`     💡 Pista: ${tip}`);
    throw new Error(`Prueba no superada: ${message}`);
  }
}

async function runTests() {
  banner('RETO 03: Interactividad JavaScript y DOM (CE3 · 1.00 pt)');
  const bloqueCDir = path.resolve(process.cwd(), 'bloque_c');
  const htmlPath = path.join(bloqueCDir, 'index.html');
  const jsPath = path.join(bloqueCDir, 'script.js');

  assert(fs.existsSync(htmlPath), 'Archivo index.html existe', 'Crea bloque_c/index.html');
  assert(fs.existsSync(jsPath), 'Archivo script.js existe', 'Crea bloque_c/script.js');

  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
  const jsContent = fs.readFileSync(jsPath, 'utf-8');

  // C1: Vincular script.js
  const dom = new JSDOM(htmlContent);
  const scriptTag = dom.window.document.querySelector('script[src="script.js"]');
  assert(Boolean(scriptTag), 'Script externo vinculado con <script src="script.js">', 'Agrega <script src="script.js"></script> en tu archivo HTML.');

  // C2: Uso estricto de let/const sin var
  assert(!jsContent.includes('// TODO: C2.'), 'Código completado por el estudiante', 'Implementa la solución en bloque_c/script.js.');
  assert(!/\bvar\s+/.test(jsContent), 'Uso moderno de variables (Cero uso de "var")', 'Usa solo "const" y "let" para declarar variables.');
  assert(jsContent.includes('const ') || jsContent.includes('let '), 'Declaración explícita con const y let', 'Declara tus variables con const o let.');

  // C3: Función nombrada (no flecha anónima obligatoria)
  const hasNamedFunction = /function\s+[a-zA-Z0-9_]+\s*\(/.test(jsContent);
  assert(hasNamedFunction, 'Creación de función nombrada clásica', 'Define una función nombrada como function saludar(...) { ... }');

  // C4: Selección y manipulación del DOM
  assert(jsContent.includes('querySelector'), 'Selección de elementos con querySelector', 'Usa document.querySelector() para capturar los inputs y botones.');
  const modifiesDom = jsContent.includes('textContent') || jsContent.includes('innerHTML') || jsContent.includes('innerText') || jsContent.includes('value');
  assert(modifiesDom, 'Modificación de contenido o valores en el DOM', 'Actualiza el texto del elemento con .textContent o .innerHTML.');

  // C5: Escucha de eventos con addEventListener
  assert(jsContent.includes('addEventListener'), 'Interactividad mediante addEventListener', 'Agrega escuchadores de eventos con .addEventListener("click", ...).');

  console.log('\n✨ ¡Excelente trabajo! Has completado con éxito el Bloque C (JavaScript + DOM). (+1.00 pt)');
}

runTests().catch(() => process.exit(1));
