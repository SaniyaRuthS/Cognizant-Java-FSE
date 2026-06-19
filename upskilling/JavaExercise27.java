import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class JavaExercise27 {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Banana");
        list.add("Apple");
        list.add("Cherry");
        
        Collections.sort(list, (a, b) -> a.compareTo(b));
        System.out.println(list);
    }
}