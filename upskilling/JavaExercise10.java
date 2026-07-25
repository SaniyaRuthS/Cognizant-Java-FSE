import java.util.Scanner;
import java.util.Random;

public class JavaExercise10 {
    public static void main(String[] args) {
        Random rand = new Random();
        int target = rand.nextInt(100) + 1;
        Scanner scanner = new Scanner(System.in);
        int guess = 0;
        
        while (guess != target) {
            System.out.print("Guess the number: ");
            guess = scanner.nextInt();
            if (guess > target) System.out.println("Too high");
            else if (guess < target) System.out.println("Too low");
            else System.out.println("Correct!");
        }
    }
}