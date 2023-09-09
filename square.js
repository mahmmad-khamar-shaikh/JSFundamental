
const cachedResult = [];
function square(num) {
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
}

console.log(square(100000));
console.log(square(100000));
console.log(square(100000));
console.log(square(100000));
console.log(square(100000));