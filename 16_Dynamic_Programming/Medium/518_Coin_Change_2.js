// TC : Object(2^n)

// var change = function (amount, coins) {
//   //   let count = 0;
//   let result = [];

//   function track(rem, start) {
//     // console.log("rem,", rem);

//     if (rem === 0) return 1;
//     if (rem < 0) return 0;

//     let count = 0;
//     for (let i = start; i < coins.length; i++) {
//       count += track(rem - coins[i], i);
//       //   console.log("i, count", i, coins[i], count);
//       //   console.log("-------------------");
//     }

//     return count;
//   }

//   return track(amount, 0);
// };

var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  // Iterate through each coin denomination.
  for (const coin of coins) {
    // Update the dp array for all amounts that can be reached using this coin.
    // We start from the value of the coin because we can't make smaller amounts with it.
    for (let i = coin; i <= amount; i++) {
      dp[i] = dp[i] + dp[i - coin];
    }
    console.log("dp", dp);
  }
  return dp[amount];
};

// console.log(change(5, [1, 2, 5]));
// console.log(change(20, [3, 5, 7, 8, 9, 10, 11]));
console.log(change(15, [3, 4, 5]));
