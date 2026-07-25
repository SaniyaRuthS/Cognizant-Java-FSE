public class SingletonTest{
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        logger1.log("Application Started");
        logger2.log("Used Logged In");
        if(logger1 == logger2){
            System.out.println("Only 1 logger instance exists");
        }else{
            System.out.println("Multiple logger instance exists");
        }
        System.out.println("Logger1 HashCode:"+logger1.hashCode());
        System.out.println("Logger2 HashCode:"+logger2.hashCode());
    }
}