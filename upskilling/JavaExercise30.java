public class JavaExercise30 {
    static void checkType(Object obj) {
        switch (obj) {
            case Integer i -> System.out.println("Integer");
            case String s -> System.out.println("String");
            case Double d -> System.out.println("Double");
            default -> System.out.println("Unknown");
        }
    }

    public static void main(String[] args) {
        checkType(10);
        checkType("Hello");
        checkType(10.5);
    }
}