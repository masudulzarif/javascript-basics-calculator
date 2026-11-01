// 1. Core Task: Basic variables and operations
let num1 = 20;
let num2 = 10;

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;

console.log("--- Basic Calculator Output ---");
console.log("Addition: " + addition);
console.log("Subtraction: " + subtraction);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);


// 2. Challenge & Extra Task: Function and Zero-handling
function calculate(a, b, operator) {
    if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else if (operator === '*') {
        return a * b;
    } else if (operator === '/') {
        // Handle divide by zero
        if (b === 0) {
            return "Error: Division by zero is not allowed!";
        }
        return a / b;
    } else {
        return "Invalid operator!";
    }
}

// Test cases
console.log("\n--- Function & Test Cases Output ---");
console.log("Test 1 (Addition): 15 + 5 =", calculate(15, 5, '+'));
console.log("Test 2 (Division): 20 / 4 =", calculate(20, 4, '/'));
console.log("Test 3 (Divide by Zero): 15 / 0 =", calculate(15, 0, '/'));


// 3. Optional Extra: Getting input using readline (Node.js)
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Uncomment the lines below if you want to test terminal user input interactively:
/*
readline.question('Enter first number: ', (input1) => {
    readline.question('Enter second number: ', (input2) => {
        let result = Number(input1) + Number(input2);
        console.log("User Input Addition Result: " + result);
        readline.close();
    });
});
*/