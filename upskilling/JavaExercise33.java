import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class JavaExercise33 {
    public static void main(String[] args) {
        try {
            Connection conn = DriverManager.getConnection("jdbc:sqlite:test.db");
            conn.setAutoCommit(false);
            
            PreparedStatement ps1 = conn.prepareStatement("UPDATE accounts SET balance = balance - 100 WHERE id = 1");
            PreparedStatement ps2 = conn.prepareStatement("UPDATE accounts SET balance = balance + 100 WHERE id = 2");
            
            ps1.executeUpdate();
            ps2.executeUpdate();
            
            conn.commit();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}