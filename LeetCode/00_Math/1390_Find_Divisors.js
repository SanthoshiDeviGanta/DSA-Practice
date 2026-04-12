function findDivisors(num) {
  let count = 0;
  let sum = 0;
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      count++;
      sum += i;
      if (i !== num / i) {
        count++;
        sum += num / i;
      }
    }
    if (count > 4) {
      return 0;
    }
  }

  return count === 4 ? sum : 0;
}

var sumFourDivisors = function (nums) {
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i], findDivisors(nums[i]));
    totalSum += findDivisors(nums[i]);
  }

  return totalSum;
};

console.log(sumFourDivisors([21, 4, 7]));
