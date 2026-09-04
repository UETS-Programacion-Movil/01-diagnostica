import fs from 'node:fs';
import path from 'node:path';

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
  banner('RETO 01: Lógica y Fundamentos de Java (CE1 · 1.00 pt)');
  const bloqueADir = path.resolve(process.cwd(), 'bloque_a');

  // Verificar que existan los 5 archivos
  for (let i = 1; i <= 5; i++) {
    const file = path.join(bloqueADir, `Ejercicio${i}.java`);
    assert(fs.existsSync(file), `Archivo Ejercicio${i}.java existe`, `Crea el archivo bloque_a/Ejercicio${i}.java`);
  }

  // Verificar contenido de Ejercicio1.java
  const ej1 = fs.readFileSync(path.join(bloqueADir, 'Ejercicio1.java'), 'utf-8');
  assert(!ej1.includes('// TODO: Declara aquí'), 'Ejercicio 1 resuelto', 'Declara variables int, double, String, boolean y muestra sus valores.');
  assert(ej1.includes('int ') && ej1.includes('double ') && ej1.includes('String ') && ej1.includes('boolean '), 'Ejercicio 1 contiene tipos requeridos', 'Verifica que hayas declarado int, double, String y boolean.');
  assert(ej1.includes('System.out.println'), 'Ejercicio 1 imprime por consola', 'Usa System.out.println() para mostrar los datos.');

  // Verificar Ejercicio2.java
  const ej2 = fs.readFileSync(path.join(bloqueADir, 'Ejercicio2.java'), 'utf-8');
  assert(!ej2.includes('// TODO: Instancia'), 'Ejercicio 2 resuelto', 'Implementa la lectura con Scanner y las 4 operaciones aritméticas.');
  assert(ej2.includes('Scanner') && ej2.includes('System.in'), 'Ejercicio 2 usa Scanner', 'Instancia Scanner con new Scanner(System.in).');

  // Verificar Ejercicio3.java
  const ej3 = fs.readFileSync(path.join(bloqueADir, 'Ejercicio3.java'), 'utf-8');
  assert(!ej3.includes('// TODO: Leer la edad'), 'Ejercicio 3 resuelto', 'Evalúa la edad con if / else y muestra si es Mayor o Menor de edad.');
  assert(ej3.includes('if') && ej3.includes('else'), 'Ejercicio 3 usa estructura if/else', 'Utiliza if(edad >= 18) y su respectivo bloque else.');

  // Verificar Ejercicio4.java
  const ej4 = fs.readFileSync(path.join(bloqueADir, 'Ejercicio4.java'), 'utf-8');
  assert(!ej4.includes('// TODO: Imprimir números del 1 al 20'), 'Ejercicio 4 resuelto', 'Implementa el bucle for (1..20) y bucle while (20..1).');
  assert(ej4.includes('for') && ej4.includes('while'), 'Ejercicio 4 contiene bucles for y while', 'Revisa la sintaxis for(...) y while(...).');

  // Verificar Ejercicio5.java
  const ej5 = fs.readFileSync(path.join(bloqueADir, 'Ejercicio5.java'), 'utf-8');
  assert(!ej5.includes('// TODO: Define la función'), 'Ejercicio 5 resuelto', 'Crea la función calcularPromedio y la clase Estudiante.');
  assert(ej5.includes('calcularPromedio') && ej5.includes('class Estudiante'), 'Ejercicio 5 contiene función y clase POO', 'Define calcularPromedio(double a, double b) y la clase Estudiante.');

  console.log('\n✨ ¡Excelente trabajo! Has completado con éxito el Bloque A (Java/Lógica). (+1.00 pt)');
}

runTests().catch(() => process.exit(1));
