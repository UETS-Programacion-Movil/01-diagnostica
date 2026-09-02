import java.util.Scanner;
public class Ejercicio2 {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        // TODO: Instancia la clase Scanner
        System.out.print("ingrese el primer numero: ");
        double num1=scanner.nextDouble();
        System.out.print("ingrese el segundp numero: ");
        double num2=scanner.nextDouble();
        // TODO: Lee dos números por teclado

        // TODO: Calcula y muestra suma, resta, multiplicación y división
        System.out.println("Suma " + (num1+num2));
        System.out.println("Resta " + (num1-num2));
        System.out.println("Division " + (num1/num2));
        System.out.println("Multiplicacion "+ (num1*num2));
    }
}
