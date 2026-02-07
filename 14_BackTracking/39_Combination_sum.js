var combinationSum = function (nums, target) {
  let result = [];

  function backTrack(path, startIdx, leftSum) {
    if (leftSum === 0) {
      result.push([...path]);
    }

    if (leftSum < 0) {
      return;
    }

    for (let i = startIdx; i < nums.length; i++) {
      path.push(nums[i]);
      backTrack(path, i, leftSum - nums[i]);
      path.pop();
    }
  }

  backTrack([], 0, target);

  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
