public class Ejercicio5 {

    public static double calcularPromedio(double a, double b) {
        return (a + b) / 2.0;
    }

    public static void main(String[] args) {
        double prom = calcularPromedio(10.0, 8.0);
        System.out.println("Promedio: " + prom);

        Estudiante est = new Estudiante("Milton", 10.0);
        est.mostrarFicha();
    }
}

class Estudiante {
    private String nombre;
    private double nota;

    public Estudiante(String nombre, double nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    public void mostrarFicha() {
        System.out.println("Estudiante: " + nombre + " - Nota: " + nota);
    }
