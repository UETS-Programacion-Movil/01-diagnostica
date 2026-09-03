public class Ejercicio5 {

    // TODO: Define la función estática calcularPromedio(double a, double b)
    public static double calcularPromedio(double a, double b) {
        return (a + b) / 2;
    }
    public static void main(String[] args) {
        // TODO: Prueba la función calcularPromedio
        System.out.println(calcularPromedio(8, 10));

        // TODO: Instancia la clase Estudiante y llama a su método mostrarFicha()
        Estudiante e = new Estudiante("Juan", 20);
        e.mostrarFicha();
    }
}

// TODO: Crea aquí la clase Estudiante con sus atributos, constructor y métodos
class Estudiante{
    String nombre;
    int edad; 

    Estudiante(String nombre, int edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    void mostrarFicha(){
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad :" + edad);
    }
}


