import java.util.Scanner;

public class Ejercicio3 {
    public static void main(String[] args) {
        // DID: Leer la edad con Scanner
        System.out.println("Ingrese la edad");
        Scanner leer = new Scanner(System.in);
        int edad = leer.nextInt();
        // DID: Evaluar con if / else si es mayor o menor de edad
        if (edad>=18)
            {
                System.out.println("Es mayor de edad");
            }
        else 
        {
            System.out.println("Es menor de edad");
        }

    }
}
