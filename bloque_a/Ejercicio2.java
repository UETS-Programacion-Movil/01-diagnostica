import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        // DID: Instancia la clase Scanner
        Scanner leer = new Scanner(System.in);
        // DID: Lee dos números por teclado
        System.out.println("Ingrese el primer numero");
        int num1 = leer.nextInt();
        System.out.println("Ingrese el segundo numero");
        int num2 = leer.nextInt();
        // DID: Calcula y muestra suma, resta, multiplicación y división
        int suma = (num1 + num2);
        int resta = (num1 - num2);
        int multiplicacion = (num1 * num2);
        double division = ((num1)/(num2));
        System.out.println("Suma: "+ suma );
        System.out.println("Resta: "+ resta );
        System.out.println("Multiplicacion: "+ multiplicacion );
        System.out.println("Division: "+ division );
    }
}
