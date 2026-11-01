// Import readline module for interactive user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Asking user for the first number
rl.question('Enter the first number: ', (num1Input) => {
    // Asking user for the second number
    rl.question('Enter the second number: ', (num2Input) => {
        
        // Convert string inputs to numbers
        let num1 = parseFloat(num1Input);
        let num2 = parseFloat(num2Input);

        console.log("\n--- Results ---");
        console.log("Addition: " + (num1 + num2));
        console.log("Subtraction: " + (num1 - num2));
        console.log("Multiplication: " + (num1 * num2));

        // Handle division by zero check
        if (num2 === 0) {
            console.log("Division: Error! Division by zero is not allowed.");
        } else {
            console.log("Division: " + (num1 / num2));
        }

        // Close the readline interface
        rl.close();
    });
});