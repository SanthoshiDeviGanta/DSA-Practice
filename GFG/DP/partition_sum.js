function canSplitWithReordering(arr) {
  // code here
  const sum = arr.reduce((a, c) => a + c, 0);

  if (sum % 2 != 0) return false;

  const target = sum / 2;
  const dp = new Array(target + 1).fill(0);
  dp[0] = true;

  console.log("dp", dp);

  for (const num of arr) {
    for (let i = target; i >= 0; i--) {
      if (dp[i - num]) dp[i] = true;
    }
    console.log("dp i", num, dp);
    if (dp[target]) return true;
  }
  return dp[target];
}

// Without re-ordering

function canSplit(nums) {
  const sum = nums.reduce((a, c) => a + c, 0);
  if (sum % 2 != 0) return false;

  const target = sum / 2;
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    if (currSum == target) {
      return true;
    }

    if (currSum > target) {
      return false;
    }
  }
}

// console.log(canSplit([1, 5, 5, 11]));
console.log(canSplit([1, 2, 3, 4, 5, 5]));
