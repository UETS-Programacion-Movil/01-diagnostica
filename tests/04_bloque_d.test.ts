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
  banner('RETO 04: Depuración Integradora y Triada Web (CE4 · 1.00 pt)');
  const bloqueDDir = path.resolve(process.cwd(), 'bloque_d');
  const htmlPath = path.join(bloqueDDir, 'index.html');
  const cssPath = path.join(bloqueDDir, 'estilos.css');
  const jsPath = path.join(bloqueDDir, 'script.js');
  const reportPath = path.join(bloqueDDir, 'REPORTE_BUGS.md');

  assert(fs.existsSync(htmlPath), 'Archivo index.html existe', 'Verifica bloque_d/index.html');
  assert(fs.existsSync(cssPath), 'Archivo estilos.css existe', 'Verifica bloque_d/estilos.css');
  assert(fs.existsSync(jsPath), 'Archivo script.js existe', 'Verifica bloque_d/script.js');
  assert(fs.existsSync(reportPath), 'Archivo REPORTE_BUGS.md existe', 'Completa bloque_d/REPORTE_BUGS.md');

  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
  const cssContent = fs.readFileSync(cssPath, 'utf-8');
  const jsContent = fs.readFileSync(jsPath, 'utf-8');
  const reportContent = fs.readFileSync(reportPath, 'utf-8');

  // D1: Bug HTML corregido
  assert(!htmlContent.includes('estilos-rotos.css'), 'Bug de enlace CSS en HTML corregido', 'Cambia el href a "estilos.css".');
  const dom = new JSDOM(htmlContent);
  const doc = dom.window.document;
  assert(Boolean(doc.querySelector('#nota1')) && (Boolean(doc.querySelector('#nota2')) || Boolean(doc.querySelector('input[id*="nota"]'))), 'Inputs con IDs correctos para selector JS', 'Corrige el id del segundo input a id="nota2".');

  // D2: Bug CSS corregido
  assert(!cssContent.includes('flexer'), 'Bug de propiedad display corregido en CSS', 'Usa display: flex en lugar de flexer.');
  assert(!cssContent.includes('pointing-hand'), 'Bug de cursor corregido en CSS', 'Usa cursor: pointer en lugar de pointing-hand.');

  // D3: Bug JS corregido
  assert(!jsContent.includes('textContnt'), 'Bug de propiedad textContent corregido en JS', 'Escribe correctamente .textContent.');
  assert(!jsContent.includes('#nota_inexistente'), 'Bug de selector corregido en JS', 'Selecciona el input correcto document.querySelector("#nota2").');
  assert(jsContent.includes('parseFloat') || jsContent.includes('Number(') || jsContent.includes('+input') || jsContent.includes('parseInt'), 'Conversión numérica de strings en JS', 'Usa parseFloat() o Number() para evitar sumar texto en lugar de números.');

  // D4: Reporte completado
  assert(!reportContent.includes('<!-- TODO:'), 'Reporte de bugs documentado en REPORTE_BUGS.md', 'Llena las secciones del informe describiendo qué fallaba, la causa raíz y cómo lo solucionaste.');

  console.log('\n✨ ¡Excelente trabajo! Has completado con éxito el Bloque D (Depuración Integradora). (+1.00 pt)');
}

runTests().catch(() => process.exit(1));
