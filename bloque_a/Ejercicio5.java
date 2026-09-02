public class Ejercicio5 {

    public static double calcularPromedio(double a, double b) {
        return (a + b) / 2;
    }

    public static void main(String[] args) {

        System.out.println("Promedio: " + calcularPromedio(8, 10));

        Estudiante estudiante = new Estudiante("Mateo", 17);
        estudiante.mostrarFicha();
    }
}

class Estudiante {
    String nombre;
    int edad;

    public Estudiante(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public void mostrarFicha() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
    }
}
