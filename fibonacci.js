function fibonacciWithMemoization(num, cachedResult = []) {
    if (cachedResult[num] != null) {
        return cachedResult[num];
    }
    let result;
    if (num <= 2) {
        result = 1;
    } else {
        result = fibonacciWithMemoization(num - 1, cachedResult) + fibonacciWithMemoization(num - 2, cachedResult);
    }
    cachedResult[num] = result;
    return result;
}

function fibonacci(num){
    if(num<=2){
        return 1;
    }
    return fibonacci(num-1) + fibonacci(num-2);
}
const startTimeNoMemo = Date.now();
console.log(fibonacci(41));
const endTimeNoMemo = Date.now() - startTimeNoMemo;
console.log('total time taken', endTimeNoMemo)


console.log('***************************************************************')

// console.time('time memoization');
// console.log(fibonacciWithMemoization(1000))
// console.timeEnd('time end without memoization');
