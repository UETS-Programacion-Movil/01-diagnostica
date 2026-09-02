public class Ejercicio5 {


    public static double calcularPromedio(double a, double b) {
        return (a + b) / 2;
    }

    public static void main(String[] args) {


        Estudiante estudiante = new Estudiante("Juan", 7.0, 9.5);
        
        double promedio = calcularPromedio(
                estudiante.getNota1(),
                estudiante.getNota2()
        );

        estudiante.mostrarFicha();
        System.out.println("Promedio: " + promedio);
    }
}

class Estudiante {

    private String nombre;
    private double n1;
    private double n2;

    public Estudiante(String nombre, double n1, double n2) {
        this.nombre = nombre;
        this.n1 = n1;
        this.n2 = n2;
    }

    public String getNombre() {
        return nombre;
    }

    public double getNota1() {
        return n1;
    }

    public double getNota2() {
        return n2;
    }

    public void mostrarFicha() {
        System.out.println("Estudiante: " + nombre);
        System.out.println("Nota 1: " + n1);
        System.out.println("Nota 2: " + n2);
    }
}