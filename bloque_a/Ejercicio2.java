public class Ejercicio2 {
    public static void main(String[] args) {
        int a = 15;
        int b = 4;

        int suma = a + b;
        int resta = a - b;
        int multiplicacion = a * b;
        double division = (double) a / b;

        System.out.println("Suma: " + suma);
        System.out.println("Resta: " + resta);
        System.out.println("Multiplicación: " + multiplicacion);
        System.out.println("División: " + division);

        if (suma % 2 == 0) {
            System.out.println("La suma es par");
        } else {
            System.out.println("La suma es impar");
        }
    }
}