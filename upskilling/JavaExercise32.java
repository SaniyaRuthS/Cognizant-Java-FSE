import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

class StudentDAO {
    Connection conn;
    public StudentDAO(Connection conn) { this.conn = conn; }
    
    public void insert(int id, String name) throws Exception {
        PreparedStatement ps = conn.prepareStatement("INSERT INTO students VALUES (?, ?)");
        ps.setInt(1, id);
        ps.setString(2, name);
        ps.executeUpdate();
    }
    
    public void update(int id, String name) throws Exception {
        PreparedStatement ps = conn.prepareStatement("UPDATE students SET name = ? WHERE id = ?");
        ps.setString(1, name);
        ps.setInt(2, id);
        ps.executeUpdate();
    }
}

public class JavaExercise32 {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection("jdbc:sqlite:test.db");
        StudentDAO dao = new StudentDAO(conn);
        dao.insert(1, "Alice");
        dao.update(1, "Alice Smith");
        conn.close();
    }
}