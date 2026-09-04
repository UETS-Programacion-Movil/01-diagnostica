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
  banner('RETO 02: Estructura HTML5 y Maquetación CSS3 (CE2 · 1.00 pt)');
  const bloqueBDir = path.resolve(process.cwd(), 'bloque_b');
  const htmlPath = path.join(bloqueBDir, 'index.html');
  const cssPath = path.join(bloqueBDir, 'estilos.css');

  assert(fs.existsSync(htmlPath), 'Archivo index.html existe', 'Crea bloque_b/index.html');
  assert(fs.existsSync(cssPath), 'Archivo estilos.css existe', 'Crea bloque_b/estilos.css');

  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
  const cssContent = fs.readFileSync(cssPath, 'utf-8');

  // B1 & B2: Parsear DOM y verificar semántica y link
  const dom = new JSDOM(htmlContent);
  const doc = dom.window.document;

  const linkCss = doc.querySelector('link[rel="stylesheet"]');
  assert(
    Boolean(linkCss && linkCss.getAttribute('href')?.includes('estilos.css')),
    'Hoja de estilos vinculada con <link rel="stylesheet" href="estilos.css">',
    'Agrega <link rel="stylesheet" href="estilos.css"> dentro de <head>.'
  );

  const header = doc.querySelector('header');
  const main = doc.querySelector('main');
  const footer = doc.querySelector('footer');
  const sectionOrArticle = doc.querySelector('section, article');

  assert(Boolean(header), 'Uso de etiqueta semántica <header>', 'Agrega una sección <header> para el encabezado.');
  assert(Boolean(main), 'Uso de etiqueta semántica <main>', 'Agrega el contenedor principal <main>.');
  assert(Boolean(sectionOrArticle), 'Uso de <section> o <article>', 'Organiza tus contenidos en <section> o <article>.');
  assert(Boolean(footer), 'Uso de etiqueta semántica <footer>', 'Agrega un <footer> al final de la página.');

  // B3 & B4: Selectores clase, ID y propiedades CSS (limpiando comentarios previos)
  const cleanCss = cssContent.replace(/\/\*[\s\S]*?\*\//g, '');

  assert(cleanCss.includes('.') && cleanCss.includes('#'), 'Uso de selectores de clase (.) y de ID (#)', 'Define al menos una regla para una clase (.mi-clase) y un id (#mi-id) en estilos.css.');

  const hasProperties = ['color', 'background', 'padding', 'margin', 'font', 'border']
    .filter(prop => cleanCss.includes(prop));
  assert(hasProperties.length >= 3, 'Define al menos 3 propiedades CSS fundamentales', 'Usa propiedades como color, background-color, padding, font-size o border.');

  // B5: Flexbox o CSS Grid
  const hasLayout = cleanCss.includes('display: flex') || 
                    cleanCss.includes('display:flex') || 
                    cleanCss.includes('display: grid') || 
                    cleanCss.includes('display:grid');
  assert(hasLayout, 'Maquetación con Flexbox o CSS Grid', 'Aplica display: flex o display: grid en tus contenedores.');

  console.log('\n✨ ¡Excelente trabajo! Has completado con éxito el Bloque B (HTML5 + CSS3). (+1.00 pt)');
}

runTests().catch(() => process.exit(1));
