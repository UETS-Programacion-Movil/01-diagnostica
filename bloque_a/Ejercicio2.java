import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {

        Scanner leer = new Scanner(System.in);

        System.out.println("Ingrese el primer número");
        double n1 = leer.nextInt();
        System.out.println("Ingrese el segundo número");
        double n2 = leer.nextInt();

        double suma = n1+n2;
        System.out.println("Suma: "+suma);
        double resta = n1-n2;
        System.out.println("Resta: "+resta);
        double multiplicacion = n1*n2;
        System.out.println("Multiplicación: "+multiplicacion);
        double division = n1/n2;
        System.out.println("Divisón: "+division)
    }
}
