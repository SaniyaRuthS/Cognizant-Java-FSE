class InvalidAgeException extends Exception {
    public InvalidAgeException(String msg) {
        super(msg);
    }
}

public class JavaExercise21 {
    public static void main(String[] args) {
        int age = 16;
        try {
            if (age < 18) {
                throw new InvalidAgeException("Age is less than 18");
            }
        } catch (InvalidAgeException e) {
            System.out.println(e.getMessage());
        }
    }
}