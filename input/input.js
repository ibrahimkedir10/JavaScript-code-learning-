/* java:

import java.util.Scanner;

public class MultiplyTwoNumbers {
    public static void main(String[] args) {
        // Create a Scanner object to read input from the console
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for the first number
        System.out.print("Enter the first number: ");

        // Read the user's input as a double
        double firstNumber = scanner.nextDouble();

        // Prompt the user for the second number
        System.out.print("Enter the second number: ");

        // Read the user's input as a double
        double secondNumber = scanner.nextDouble();

        // Multiply the two numbers
        double result = firstNumber * secondNumber;

        // Display the result
        System.out.println("Result of multiplying the two numbers: " + result);

        // Close the scanner to release resources
        scanner.close();
    }
}
*/

// js 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for the first number
rl.question('Enter the first number: ', (firstNumberInput) => {
    // Convert the input to a floating-point number
    let firstNumber = parseFloat(firstNumberInput);

    // Check if the conversion was successful
    if (isNaN(firstNumber)) {
        console.log("Invalid input for the first number. Please enter a valid number.");
        rl.close();
    } else {
        // Prompt the user for the second number
        rl.question('Enter the second number: ', (secondNumberInput) => {
            // Convert the input to a floating-point number
            let secondNumber = parseFloat(secondNumberInput);

            // Check if the conversion was successful
            if (isNaN(secondNumber)) {
                console.log("Invalid input for the second number. Please enter a valid number.");
            } else {
                // Multiply the two numbers
                let result = firstNumber * secondNumber;

                // Display the result
                console.log("Result of multiplying the two numbers: " + result);
            }

            // Close the readline interface
            rl.close();
        });
    }
});
