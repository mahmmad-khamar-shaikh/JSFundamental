function fibonacciWithMemoization(num, previousResult = []) {
    if (previousResult[num] != null) {
        return previousResult[num];
    }
    let result;
    if (num <= 2) {
        result = 1;
    } else {
        result = fibonacciWithMemoization(num - 1, previousResult) + fibonacciWithMemoization(num - 2, previousResult);
    }
    previousResult[num] = result;
    return result;
}

function fibonacci(num){
    if(num<=2){
        return 1;
    }
    return fibonacci(num-1) + fibonacci(num-2);
}

// console.log(fibonacci(41));
console.log(fibonacciWithMemoization(1000))