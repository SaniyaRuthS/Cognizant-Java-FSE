public class JavaExercise12 {
    public int add(int a, int b) { return a + b; }
    public double add(double a, double b) { return a + b; }
    public int add(int a, int b, int c) { return a + b + c; }
    
    public static void main(String[] args) {
        JavaExercise12 obj = new JavaExercise12();
        System.out.println(obj.add(5, 10));
        System.out.println(obj.add(5.5, 10.5));
        System.out.println(obj.add(1, 2, 3));
    }
}