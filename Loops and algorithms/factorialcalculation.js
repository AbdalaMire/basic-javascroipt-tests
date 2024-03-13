function calculateFactorial(n) {
    if (n < 0) {
        // Factorial of negative numbers is undefined
        return "Undefined";
    }

    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }

    return result;
}

// Example usage:
const inputNumber = 5;
const factorialResult = calculateFactorial(inputNumber);
console.log(`Factorial of ${inputNumber} is: ${factorialResult}`);