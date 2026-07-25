import java.io.*;
import java.net.*;
import java.util.Scanner;

public class JavaExercise35 {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(8080)) {
            System.out.println("Waiting for client on port 8080...");
            Socket socket = serverSocket.accept();
            System.out.println("Client connected.");

            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            Scanner scanner = new Scanner(System.in);

            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                System.out.println("Client: " + inputLine);
                if (inputLine.equalsIgnoreCase("bye")) break;
                
                System.out.print("Server: ");
                String response = scanner.nextLine();
                out.println(response);
            }
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
