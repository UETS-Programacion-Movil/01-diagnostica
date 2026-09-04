import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const tests = [
  { name: 'Reto 01 (Bloque A - Java & Lógica)', file: 'tests/01_bloque_a.test.ts', raw: '01_bloque_a.test.ts', pts: '1.00' },
  { name: 'Reto 02 (Bloque B - HTML5 & CSS3)', file: 'tests/02_bloque_b.test.ts', raw: '02_bloque_b.test.ts', pts: '1.00' },
  { name: 'Reto 03 (Bloque C - JS & DOM)', file: 'tests/03_bloque_c.test.ts', raw: '03_bloque_c.test.ts', pts: '1.00' },
  { name: 'Reto 04 (Bloque D - Depuración Triada)', file: 'tests/04_bloque_d.test.ts', raw: '04_bloque_d.test.ts', pts: '1.00' }
];

function fetchRemote(fileName: string): Promise<string | null> {
  return new Promise((resolve) => {
    const url = `https://raw.githubusercontent.com/UETS-Programacion-Movil/01-diagnostica/main/tests/${fileName}`;
    const req = https.get(url, { timeout: 1500 }, (res) => {
      if (res.statusCode !== 200) {
        return resolve(null);
      }
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    });
    req.on('error', () => resolve(null));
    req.on('timeout', () => { req.destroy(); resolve(null); });
  });
}

async function syncTests() {
  let updatedCount = 0;
  for (const t of tests) {
    try {
      const remote = await fetchRemote(t.raw);
      if (remote) {
        const localPath = path.resolve(process.cwd(), t.file);
        const current = fs.existsSync(localPath) ? fs.readFileSync(localPath, 'utf-8') : '';
        if (remote.trim() !== current.trim()) {
          fs.writeFileSync(localPath, remote, 'utf-8');
          updatedCount++;
        }
      }
    } catch {
      // Offline fallback
    }
  }
  if (updatedCount > 0) {
    console.log(`🔄 [Auto-Sync] Se actualizaron ${updatedCount} archivo(s) de prueba con la versión oficial de main.\n`);
  }
}

async function main() {
  console.log('╔══════════════════════════════════════════════════════════════════════╗');
  console.log('║   🎓 UETS PROGRAMACIÓN MÓVIL — EVALUACIÓN DIAGNÓSTICA RUNNER        ║');
  console.log('║   Docente: Ing. Milton Velásquez · Año Lectivo 2026-2027             ║');
  console.log('╚══════════════════════════════════════════════════════════════════════╝\n');

  await syncTests();

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
}

main().catch(() => process.exit(1));
