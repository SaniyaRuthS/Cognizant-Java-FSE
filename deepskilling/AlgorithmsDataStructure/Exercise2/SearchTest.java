import java.util.Arrays;
import java.util.Comparator;
public class SearchTest {
    public static Product linearSearch(Product[] products, int id) {
        for (Product product : products) {
            if (product.productId == id) {
                return product;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] products, int id) {
        int low = 0;
        int high = products.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (products[mid].productId == id) {
                return products[mid];
            } else if (products[mid].productId < id) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }
    public static void main(String[] args) {
        Product[] products = {
            new Product(103, "Laptop", "Electronics"),
            new Product(101, "Shoes", "Fashion"),
            new Product(104, "Phone", "Electronics"),
            new Product(102, "Watch", "Accessories")
        };
        Product result1 = linearSearch(products, 102);
        if (result1 != null) {
            System.out.println("Linear Search:");
            System.out.println(result1.productId + " " + result1.productName + " " + result1.category);
        } else {
            System.out.println("Product not found");
        }
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
        Product result2 = binarySearch(products, 102);
        if (result2 != null) {
            System.out.println("\nBinary Search:");
            System.out.println(result2.productId + " " + result2.productName + " " + result2.category);
        } else {
            System.out.println("Product not found");
        }
    }
}