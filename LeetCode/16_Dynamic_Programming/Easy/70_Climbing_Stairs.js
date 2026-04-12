/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let ways = [1, 2];

  for (let i = 2; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }

  return ways[n - 1];
};

let store = new Map();

// var climbStairs = function (n) {
//   if (n <= 2) {
//     return n;
//   }
//   console.log(n, store);
//   if (!store.get(n)) {
//     store.set(n, climbStairs(n - 1) + climbStairs(n - 2));
//   }

//   return store.get(n);
// };

// var climbStairs = function (n) {
//   if (n <= 2) {
//     return n;
//   }
//   console.log("n", n);

//   return climbStairs(n - 1) + climbStairs(n - 2);
// };

console.log(climbStairs(7));
