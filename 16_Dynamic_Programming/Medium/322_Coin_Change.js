/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// The below is Greedy method, but it fails in some scenarios:
// coins = [2, 3, 5]
//  start : 6-5 = 1 but 1 doesnt exist and it returns -1
// So we use DP to create optimal solutions like all possible approaches : 3 + 3
// var coinChange = function (coins, amount) {
//   coins.sort((a, b) => b - a);

//   console.log("coins", coins);
//   let i = 0;
//   let count = 0;
//   let bal = amount;

//   while (i < coins.length) {
//     let a = coins[i];
//     if (coins[i] <= bal) {
//       bal = bal - coins[i];
//       count++;
//     } else {
//       i++;
//     }
//   }

//   return bal === 0 ? count : -1;
// };

// Top Down Approach
// var coinChange = function (coins, amount) {
//   let store = {};
//   function checkChange(bal) {
//     if (bal === 0) return 0;
//     if (bal < 0) return -1;
//     if (bal in store) {
//       return store[bal];
//     }

//     let minCoins = Infinity;
//     for (let i = 0; i < coins.length; i++) {
//       let res = checkChange(bal - coins[i]);
//       if (res !== -1) {
//         minCoins = Math.min(minCoins, 1 + res);
//       }
//     }
//     store[bal] = minCoins === Infinity ? -1 : minCoins;
//     return store[bal];
//   }
//   return checkChange(amount, 0);
// };

// Bottom Up Approach
// var coinChange = function (coins, amount) {
//   let store = new Array(amount + 1).fill(Infinity);
//   store[0] = 0;

//   for (let coinVal = 1; coinVal <= amount; coinVal++) {
//     for (let j = 0; j < coins.length; j++) {
//       let bal = coinVal - coins[j];
//       if (bal >= 0) {
//         store[coinVal] = Math.min(store[coinVal], 1 + store[bal]);
//       }
//     }
//   }

//   return store[amount] === Infinity ? -1 : store[amount];
// };

// Bottom Up Approach -- Reduced loops
var coinChange = function (coins, amount) {
  let store = new Array(amount + 1).fill(Infinity);
  store[0] = 0;
  //   coins.sort((a, b) => b - a);
  //   coins.sort((a, b) => a - b);

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];

    for (let j = coin; j <= amount; j++) {
      const val = store[j - coin] + 1;

      if (val < store[j]) {
        store[j] = val;
      }
    }
    console.log("store", store);
  }

  return store[amount] === Infinity ? -1 : store[amount];
};

console.log(coinChange([2, 4, 7], 20));
// console.log(coinChange([2], 3));
// console.log(coinChange([186, 419, 83, 408], 6249));

// console.log(coinChange([1, 5, 7, 9], 45));
