import { execSync } from 'node:child_process';

const tests = [
  { name: 'Reto 01 (Bloque A - Java & Lógica)', file: 'tests/01_bloque_a.test.ts', pts: '1.00' },
  { name: 'Reto 02 (Bloque B - HTML5 & CSS3)', file: 'tests/02_bloque_b.test.ts', pts: '1.00' },
  { name: 'Reto 03 (Bloque C - JS & DOM)', file: 'tests/03_bloque_c.test.ts', pts: '1.00' },
  { name: 'Reto 04 (Bloque D - Depuración Triada)', file: 'tests/04_bloque_d.test.ts', pts: '1.00' }
];

console.log('╔══════════════════════════════════════════════════════════════════════╗');
console.log('║   🎓 UETS PROGRAMACIÓN MÓVIL — EVALUACIÓN DIAGNÓSTICA RUNNER        ║');
console.log('║   Docente: Ing. Milton Velásquez · Año Lectivo 2026-2027             ║');
console.log('╚══════════════════════════════════════════════════════════════════════╝\n');

let totalScore = 0;
let passedCount = 0;

for (const t of tests) {
  try {
    execSync(`npx tsx ${t.file}`, { stdio: 'inherit' });
    totalScore += 1.0;
    passedCount++;
  } catch {
    console.log(`\n❌ ${t.name}: Incompleto / Con errores`);
  }
}

console.log('\n' + '─'.repeat(70));
console.log(`📊 RESUMEN CONSOLIDADO DE PRUEBAS: ${passedCount} / ${tests.length} RETOS APROBADOS`);
console.log(`🏆 PUNTAJE PRÁCTICO OBTENIDO: ${totalScore.toFixed(2)} / 4.00 PUNTOS`);
console.log('─'.repeat(70) + '\n');

if (passedCount < tests.length) {
  process.exit(1);
}
