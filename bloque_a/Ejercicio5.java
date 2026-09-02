public class Ejercicio5 {

    // TODO: Define la función estática calcularPromedio(double a, double b)
    public static double calcularPromedio(double a, double b) {
        return (a + b) / 2;
    }

    public static void main(String[] args) {
        // TODO: Prueba la función calcularPromedio
        System.out.println("Promedio: " + calcularPromedio(8.0, 9.5));

        // TODO: Instancia la clase Estudiante y llama a su método mostrarFicha()
        Estudiante est = new Estudiante("Ana", 20);
        est.mostrarFicha();
    }
}

// TODO: Crea aquí la clase Estudiante con sus atributos, constructor y métodos
class Estudiante {
    String nombre;
    int edad;

    public Estudiante(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public void mostrarFicha() {
        System.out.println("Estudiante: " + nombre + ", Edad: " + edad);
    }
}