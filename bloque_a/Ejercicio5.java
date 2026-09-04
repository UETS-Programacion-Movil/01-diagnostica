public class Ejercicio5 {

    public static double calcularPromedio(double a, double b) {
        return (a + b) / 2;
    }

    public static void main(String[] args) {
        double promedio = calcularPromedio(8.5, 9.5);
        System.out.println(promedio);

        Estudiante estudiante = new Estudiante("Juan", 17, "Informática");
        estudiante.mostrarFicha();
    }
}

class Estudiante {
    String nombre;
    int edad;
    String carrera;

    public Estudiante(String nombre, int edad, String carrera) {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
    }

    public void mostrarFicha() {
        System.out.println(nombre);
        System.out.println(edad);
        System.out.println(carrera);
    }
}