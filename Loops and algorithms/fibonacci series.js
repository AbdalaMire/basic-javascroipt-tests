function generateFibonacciSeries(num) {
    if (num <= 0) {
        return []; // Empty Array for non-positive input
    } else if (num === 1) {
        return [0]; // Base Case: Fibonacci series starts with 0
    } else {
        const fibonacciArray = [0, 1]; // Initialize array with first two elements
        for (let i = 2; i < num; i++) {
            fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
        }
        return fibonacciArray;
    }
}