class Car {
    String make;
    String model;
    int year;
    
    public void displayDetails() {
        System.out.println(year + " " + make + " " + model);
    }
}

public class JavaExercise17 {
    public static void main(String[] args) {
        Car car = new Car();
        car.make = "Toyota";
        car.model = "Camry";
        car.year = 2020;
        car.displayDetails();
    }
}