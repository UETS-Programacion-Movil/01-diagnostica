import java.util.Scanner;

public class Ejercicio3 {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        // TODO: Leer la edad con Scanner
        System.out.println("Ingrese la edad:" );
        int edad=scanner.nextInt();

        // TODO: Evaluar con if / else si es mayor o menor de edad
        if (edad>=18) 
            System.out.println("Es mayor de edad");
        else
            System.out.println("Es menor de edad");
            
        }
    }
