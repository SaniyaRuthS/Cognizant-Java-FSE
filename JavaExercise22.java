import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class JavaExercise22 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter string: ");
        String str = scanner.nextLine();
        try (FileWriter fw = new FileWriter("output.txt")) {
            fw.write(str);
            System.out.println("Data written to output.txt");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}