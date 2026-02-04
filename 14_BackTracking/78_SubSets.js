var subsets = function (nums) {
  let result = [];

  function backTrack(path, startIdx) {
    result.push([...path]);
    for (let i = startIdx; i < nums.length; i++) {
      path.push(nums[i]);
      backTrack(path, i + 1);
      path.pop();
    }
  }
  backTrack([], 0);

  return result;
};

console.log(subsets([1, 2, 3]));
