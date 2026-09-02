public class Ejercicio5 {

    public static double calcularPromedio(double a, double b) {
        return (a + b) / 2;
    }

    public static void main(String[] args) {
        double promedio = calcularPromedio(9.5, 8.5);
        System.out.println("Promedio: " + promedio);

        Estudiante estudiante = new Estudiante("Ariel", 17, promedio);
        estudiante.mostrarFicha();
    }
}

class Estudiante {
    private final String nombre;
    private final int edad;
    private final double promedio;

    public Estudiante(String nombre, int edad, double promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.promedio = promedio;
    }

    public void mostrarFicha() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Promedio: " + promedio);
    }
}
