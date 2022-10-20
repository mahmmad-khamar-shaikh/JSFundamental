function fibonacci(number, previousResult = []) {
    if (previousResult[number] != null) {
        return previousResult[number];
    }
    let result;
    if (number <= 2) {
        result = 1;
    } else {
        result = fibonacci(number - 1, previousResult) + fibonacci(number - 2, previousResult);
    }
    previousResult[number] = result;
    return result;
}
console.log(fibonacci(10));