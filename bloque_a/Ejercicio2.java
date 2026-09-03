import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        // TODO: Instancia la clase Scanner
       
        Scanner scanner = new Scanner(System.in);

        // TODO: Lee dos números por teclado
        
        System.out.print("Ingrese el primer número: ")
        double num1 = scanner.nextDouble();

        // TODO: Calcula y muestra suma, resta, multiplicación y división
       
        double suma = num1 + num2;
        double resta = num1 - num2;
        double multiplicacion = num1 * num2;
        double division = num2 != 0 ? num1 / num2 : 0;

        System.out.println("Suma: "+ suma);
        System.out.println("Resta: " + resta);
        System.out.println("Multiplicacion: " + multiplicacion);
        System.out.println("Division: " + (num2 != 0 ? division : "Error (División por cero)"));

        scanner.close();
    }
}
