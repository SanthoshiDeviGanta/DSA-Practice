// console.log("rem", rem);
// console.log(rem, "left", left, nums[left], "right", right, nums[right]);
// console.log(rem, "left", nums[left], "right", nums[right]);

var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [
        [left, right],
        [nums[left], nums[right]],
      ];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
};

// console.log(
//   twoSum([2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 15, 17, 19, 21, 22, 23, 25], 41)
// );

console.log(twoSum([2, 3, 4], 6));
