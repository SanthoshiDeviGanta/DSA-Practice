var combinationSum2 = function (nums, target) {
  let result = [];

  nums.sort((a, b) => a - b);

  console.log("nums", nums);

  function backTrack(path, startIdx, leftSum) {
    if (leftSum === 0) {
      result.push([...path]);
    }
    // if (leftSum < 0) {
    //   return;
    // }
    for (let i = startIdx; i < nums.length; i++) {
      if (i > startIdx && nums[i] === nums[i - 1]) {
        continue;
      }
      if (nums[i] > leftSum) {
        break;
      }
      path.push(nums[i]);
      backTrack(path, i + 1, leftSum - nums[i]);
      path.pop();
    }
  }
  backTrack([], 0, target);

  return result;
};

// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));

let nums1 = [
  14, 6, 25, 9, 30, 20, 33, 34, 28, 30, 16, 12, 31, 9, 9, 12, 34, 16, 25, 32, 8,
  7, 30, 12, 33, 20, 21, 29, 24, 17, 27, 34, 11, 17, 30, 6, 32, 21, 27, 17, 16,
  8, 24, 12, 12, 28, 11, 33, 10, 32, 22, 13, 34, 18, 12,
];
console.log(combinationSum2(nums1, 27));
