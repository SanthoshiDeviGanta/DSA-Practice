/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canPartition = function (nums) {
//   let sum = nums.reduce((acc, curr) => acc + curr, 0);
//   if (sum % 2 !== 0) return false;

//   const memo = Array.from({ length: sum + 1 }, () =>
//     Array(nums.length).fill(undefined),
//   );

//   function checkSum(start, target) {
//     if (target === 0) return true;
//     if (target < 0) return false;

//     console.log("memo", memo);

//     if (memo[target][start] != undefined) return memo[target][start];

//     for (let i = start; i < nums.length; i++) {
//       let bal = checkSum(i + 1, target - nums[i]);
//       if (bal) return true;
//     }
//     memo[target][start] = false;
//     return false;
//   }
//   return checkSum(0, sum / 2);
// };

var canPartition = function (nums) {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);

  // If the total sum is odd, we can't split it into two equal integers
  if (sum % 2 !== 0) return false;

  const target = sum / 2;
  const dp = new Array(target + 1).fill(false);

  // Base case: A sum of 0 is always possible (empty subset)
  dp[0] = true;

  for (const num of nums) {
    // Iterate backwards to ensure we don't use the same element multiple times
    // for the same target sum (standard 0/1 Knapsack optimization)
    for (let i = target; i >= num; i--) {
      if (dp[i - num]) {
        dp[i] = true;
      }
    }
    console.log("dp", dp);

    // Early exit if we found the target
    if (dp[target]) return true;
  }

  return dp[target];
};

// console.log(canPartition([1, 5, 11, 5]));
// console.log(canPartition([2, 6, 4, 2, 4, 12]));
// console.log(canPartition([1, 2, 3, 6]));
console.log(canPartition([5, 4, 2, 3, 1, 1]));
