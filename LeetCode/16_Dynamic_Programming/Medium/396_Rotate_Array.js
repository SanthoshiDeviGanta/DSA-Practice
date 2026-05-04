var maxRotateFunction = function (nums) {
  let n = nums.length;
  let sum = 0;
  let fk = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    fk += i * nums[i];
  }

  let maxSum = fk;

  for (let k = 1; k < n; k++) {
    fk = fk + sum - n * nums[n - k];
    console.log("fk", fk);

    maxSum = Math.max(maxSum, fk);
  }

  return maxSum;

  console.log("sum", sum, fk);
};

console.log(maxRotateFunction([4, 3, 2, 6]));
