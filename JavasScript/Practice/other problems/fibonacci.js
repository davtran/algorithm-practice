/*
Examples of dynamic programming, one with memoization and another with
tabulation
 */

function fibonacci(number, memo=[]) {
    if (memo[number] !== undefined) {
        return memo[number];
    } 
    if (number <= 2) {
        return 1;
    }
    const result = fibonacci(number - 1, memo) + fibonacci(number - 2, memo);
    memo[number] = result;
    return result;
}

function tabluatedFibonacci(number) {
    if (number <= 2) {
        return 1;
    }

    const fibonacciNumbers = [0, 1, 1];
    for (let i = 3; i <= number; i++) {
        fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
    }
    return fibonacciNumbers[number];
}
console.log(`memo: ${fibonacci(50)}`);

console.log(`table: ${tabluatedFibonacci(50)}`);