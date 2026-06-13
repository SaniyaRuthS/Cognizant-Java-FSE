import java.io.*;
import java.net.*;
import java.util.Scanner;

public class JavaExercise35Client {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 8080)) {
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            Scanner scanner = new Scanner(System.in);

            while (true) {
                System.out.print("Client: ");
                String msg = scanner.nextLine();
                out.println(msg);
                
                if (msg.equalsIgnoreCase("bye")) break;
                
                String response = in.readLine();
                System.out.println("Server: " + response);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
