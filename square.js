
const cachedResult = [];
function square(num) {
    let sqr = 0;
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            sqr += 1;
        }
    }
    return sqr;
};


function squareWithMemo(num) {
    if (cachedResult[num] != null) {
        return cachedResult[num];
    }
    let sqr = 0;
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            sqr = sqr + 1;
        }
    }
    cachedResult[num] = sqr;
    return sqr;
};


let squareStartTime = Date.now(); // set starting milliseconds;
console.log(`Start Time ${squareStartTime}`);
console.log(square(100000));
console.log(`End time ${Date.now()}`);
let totalTimeElased = Date.now() - squareStartTime;
console.log(`Total Time elapsed ${totalTimeElased}`);
console.log('Total time elapsed in Square function without Memoizatino - First Call', Math.floor(totalTimeElased / 1000));

squareStartTime = Date.now();
console.log(square(100000));
totalTimeElased = Date.now() - squareStartTime;
console.log('Total time elapsed in Square function without Memoizatino - Second Call', Math.floor(totalTimeElased / 1000));

squareStartTime = Date.now();
console.log(square(100000));
totalTimeElased = Date.now() - squareStartTime;
console.log('Total time elapsed in Square function without Memoizatino - Third Call', Math.floor(totalTimeElased / 1000));

// /*************** Memoized call **************/

let squareStartTimeWithMemo = Date.now(); // set starting milliseconds;

console.log(squareWithMemo(100000));
totalTimeElased = Date.now() - squareStartTimeWithMemo;
console.log('Total time elapsed in Square function Memoized - First Call', Math.floor(totalTimeElased / 1000));

squareStartTimeWithMemo = Date.now();
console.log(squareWithMemo(100000));
totalTimeElased = Date.now() - squareStartTimeWithMemo;
console.log('Total time elapsed in Square function Memoized - Second Call', Math.floor(totalTimeElased / 1000));

squareStartTimeWithMemo = Date.now();
console.log(squareWithMemo(100000));
totalTimeElased = Date.now() - squareStartTimeWithMemo;
console.log('Total time elapsed in Square function Memoized - Third Call', Math.floor(totalTimeElased / 1000));
