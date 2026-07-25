class Animal {
    public void makeSound() {
        System.out.println("Some sound");
    }
}
class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }
}
public class JavaExercise18 {
    public static void main(String[] args) {
        Animal a = new Animal();
        a.makeSound();
        Dog d = new Dog();
        d.makeSound();
    }
}