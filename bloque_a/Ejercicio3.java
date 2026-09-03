import java.util.Scanner;

public class Ejercicio3 {
    public static void main(String[] args) {
        // TODO: Leer la edad con Scanner
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese la edad de la persona: ");
        int edad = scanner.nextInt();

        // TODO: Evaluar con if / else si es mayor o menor de edad
        if (edad >= 18) {
            System.out.println("La persona es mayor de edad.");
        } else {
            System.out.println("La persona es menor de edad.");
        }
        scanner.close();
    }
}
