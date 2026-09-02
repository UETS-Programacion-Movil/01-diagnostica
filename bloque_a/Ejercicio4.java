public class Ejercicio4 {
    public static void main(String[] args) {
        int[] numeros = {10, 20, 30, 40, 50};
        int suma = 0;

        for (int num : numeros) {
            suma += num;
        }

        double promedio = (double) suma / numeros.length;
        System.out.println("Suma total: " + suma);
        System.out.println("Promedio: " + promedio);
    }
}