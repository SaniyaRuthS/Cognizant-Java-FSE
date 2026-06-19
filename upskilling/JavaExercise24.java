import java.util.ArrayList;
import java.util.Scanner;

public class JavaExercise24 {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.print("Enter name (or 'stop'): ");
            String name = scanner.nextLine();
            if (name.equals("stop")) break;
            list.add(name);
        }
        for (String s : list) {
            System.out.println(s);
        }
    }
}