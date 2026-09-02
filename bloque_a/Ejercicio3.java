import java.util.Scanner;

public class Ejercicio3 {
    public static void main(String[] args) {

        Scanner edad = new Scanner(System.in);

        System.out.print("Ingrese su edad: ");
        int edad = edad.nextInt();

        if (edad >= 18) {
            System.out.println("Es mayor de edad");
        } else {
            System.out.println("Es menor de edad");
    }
}
}
