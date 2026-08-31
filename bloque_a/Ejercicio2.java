import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        Scanner Lector = new Scanner(System.in);

        System.out.println("Dime número");
        int num1 = Lector.nextInt;

        System.out.println("Dime otro número");
        int num2 = Lector.nextInt;


        void Calcular(){
            int suma = (num1+num2);
            System.out.println("Suma es "+suma);

            int resta = (num1-num2);
            System.out.println("Resta es "+resta);

            int multiplicacion = (num1*num2);
            System.out.println("Multiplicación es "+multiplicacion);

            double division = (num1/num2);
            System.out.println("División es "+division)
        }
    }
}
