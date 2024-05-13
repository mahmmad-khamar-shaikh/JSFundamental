/// Soleve issue with below code

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 1000);
}


// Solution 1 - using let instead of var

for (let i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 1000);
  }
  

// Solution 2 - using closure

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 1000 * j);
  })(i);
}
