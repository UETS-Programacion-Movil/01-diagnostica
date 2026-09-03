
class Estudiante {
    private String nombre;
    private double nota1;
    private double nota2;

    public Estudiante(String nombre, double nota1, double nota2) {
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    public double calcularPromedio() {
        return (this.nota1 + this.nota2) / 2.0;
    }

    public String getNombre() {
        return nombre;
    }

}

public class Ejercicio5 {

    // TODO: Define la función estática calcularPromedio(double a, double b)
    public static double calcularPromedio(double a, double b) {
        return (a + b) / 2.0;
    }

    public static void main(String[] args) {
        // TODO: Prueba la función calcularPromedio
        double promDirecto = calcularPromedio(8.5, 9.5);
        System.out.println("Promedio calculado por función: " + promDirecto);

        // TODO: Instancia la clase Estudiante y llama a su método mostrarFicha()
        Estudiante estudiante = new Estudiante("Carlos", 9.0, 10.0);
        System.out.println("Estudiante: " + estudiante.getNombre());
        System.out.println("Promedio de Estudiante: " + estudiante.calcularPromedio());
    }
}

// TODO: Crea aquí la clase Estudiante con sus atributos, constructor y métodos
