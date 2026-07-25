import java.lang.reflect.Method;

public class JavaExercise39 {
    public void dynamicMethod() {
        System.out.println("Invoked via reflection");
    }

    public static void main(String[] args) throws Exception {
        Class<?> clazz = Class.forName("JavaExercise39");
        Object obj = clazz.getDeclaredConstructor().newInstance();
        Method method = clazz.getDeclaredMethod("dynamicMethod");
        method.invoke(obj);
    }
}