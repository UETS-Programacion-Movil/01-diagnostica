import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        // TODO: Instancia la clase Scanner
        Scanner scanner = new Scanner(System.in);
        
        // TODO: Lee dos números por teclado
        System.out.print("Ingrese el primer número: ");
        double num1 = scanner.nextDouble();
        System.out.print("Ingrese el segundo número: ");
        double num2 = scanner.nextDouble();

        // TODO: Calcula y muestra suma, resta, multiplicación y división
        System.out.println("Suma: " + (num1 + num2));
        System.out.println("Resta: " + (num1 - num2));
        System.out.println("Multiplicación: " + (num1 * num2));
        
        if (num2 != 0) {
            System.out.println("División: " + (num1 / num2));
        } else {
            System.out.println("División: No es posible dividir entre cero.");
        }
        scanner.close();
    }
}
