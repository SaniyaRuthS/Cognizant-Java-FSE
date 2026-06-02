import java.util.HashMap;
import java.util.Scanner;

public class JavaExercise25 {
    public static void main(String[] args) {
        HashMap<Integer, String> map = new HashMap<>();
        Scanner scanner = new Scanner(System.in);
        map.put(1, "Alice");
        map.put(2, "Bob");
        
        System.out.print("Enter ID: ");
        int id = scanner.nextInt();
        System.out.println(map.getOrDefault(id, "Not found"));
    }
}