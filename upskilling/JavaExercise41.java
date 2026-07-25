import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class JavaExercise41 {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        Callable<Integer> task = () -> 5 + 10;
        Future<Integer> future = executor.submit(task);
        System.out.println(future.get());
        executor.shutdown();
    }
}