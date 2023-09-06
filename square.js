
const previousresul = [];
function square(num) {
    if (previousresul[num] != null) {
        return previousresul[num];
    }
    let sqr = 0;
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            sqr = sqr + 1;
        }
    }
    previousresul[num] = sqr;
    return sqr;
}

console.log(square(100000));
console.log(square(100000));
console.log(square(100000));
console.log(square(100000));
console.log(square(100000));