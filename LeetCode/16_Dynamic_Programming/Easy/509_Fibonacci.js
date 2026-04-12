// function fib(n) {
//   console.log("in fib", n);
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   return fib(n - 1) + fib(n - 2);
// }

// ----------------------------------------------------------------------------------------------------------------

// Top Down Approach -- Recursion
// let store = new Map();

// function fib(n) {
//   console.log("in fib", n);
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   if (!store.get(n)) {
//     store.set(n, fib(n - 1) + fib(n - 2));
//   }

//   return store.get(n);
// }

// console.log(fib(7));

// ----------------------------------------------------------------------------------------------------------------
// Bottom Up Approach -- Iteration approach -- Tabulation

var fib = function (n) {
  let store = [0, 1];

  for (let i = 2; i <= n; i++) {
    store[i] = store[i - 1] + store[i - 2];
  }

  console.log("store", store);
  return store[n];
};

console.log(fib(7));
