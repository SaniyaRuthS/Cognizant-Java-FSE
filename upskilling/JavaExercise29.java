import java.util.List;
import java.util.stream.Collectors;

record Person(String name, int age) {}

public class JavaExercise29 {
    public static void main(String[] args) {
        Person p1 = new Person("Alice", 25);
        Person p2 = new Person("Bob", 15);
        List<Person> list = List.of(p1, p2);
        
        List<Person> adults = list.stream().filter(p -> p.age() >= 18).collect(Collectors.toList());
        System.out.println(adults);
    }
}