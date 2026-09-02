import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingresa el primer número: ");
        double numero1 = scanner.nextDouble();
        System.out.print("Ingresa el segundo número: ");
        double numero2 = scanner.nextDouble();

        System.out.println("Suma: " + (numero1 + numero2));
        System.out.println("Resta: " + (numero1 - numero2));
        System.out.println("Multiplicación: " + (numero1 * numero2));
        if (numero2 != 0) {
            System.out.println("División: " + (numero1 / numero2));
        } else {
            System.out.println("División: no se puede dividir entre cero");
        }
        scanner.close();
    }
}
