// Using Recursion
// function fib(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fib(n - 1) + fib(n - 2);
// }


// Using For Loop
var fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
};

// Constraints:
// 0 <= n <= 30

// console.log(fib(5));
console.log(fib(6));

