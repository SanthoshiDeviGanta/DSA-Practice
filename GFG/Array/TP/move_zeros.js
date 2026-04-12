function pushZerosToEnd(nums) {
  let x = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] != 0) {
      if (i != x) {
        [nums[i], nums[x]] = [nums[x], nums[i]];
      }
      x++;
    }
    i++;
  }
  return nums;
}

console.log(pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]));
