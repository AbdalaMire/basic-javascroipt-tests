function divide (a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

try {
    const numerator = 10;
    const denominator = 0;
    const result = divide(numerator, denominator);
    console.log(`Result: ${result}`);
} catch (error) {
    console.error(error.message);
}