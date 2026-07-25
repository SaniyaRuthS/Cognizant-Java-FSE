public class JavaExercise38 {
    public static void main(String[] args) {
        String adminPassword = "super_secret_password_123";
        if (args.length > 0 && args[0].equals(adminPassword)) {
            System.out.println("Access Granted");
        } else {
            System.out.println("Access Denied");
        }
    }
}
