public class Ejercicio5 {
        public static double calcularPromedio(double a, double b) {
        double promedio;
        promedio = (a + b) /2.0;
        return promedio;
    }    public static void main(String[] args) {
        int a = 6;
        int b = 2;
        double promedio = calcularPromedio(a , b);
        String nombre = "Pablo Abril";
        int edad = 14;
        Estudiante est1 = new Estudiante (nombre, edad, promedio);
        est1.mostrarFicha(promedio);
    }

}
class Estudiante {
    private String nombre;
    private int edad;
    public Estudiante(String nombre, int edad, double promedio) {
        this.nombre = nombre;
        this.edad = edad;
    }
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public int getEdad() {
        return edad;
    }
    
    public void setEdad(int edad) {
        this.edad = edad;
    }
    
    public void mostrarFicha (double promedio) {
        System.out.println("FICHA DEL ESTUDIANTE ");
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Promedio: " + promedio);
    }
}
