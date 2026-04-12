function subsetWithDuplicates(nums) {
  let result = [];

  nums.sort((a, b) => a - b);

  function backTrack(path, startIdx) {
    result.push([...path]);
    for (let i = startIdx; i < nums.length; i++) {
      // Checking for duplicates
      if (i > startIdx && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      backTrack(path, i + 1);
      path.pop();
    }
  }
  backTrack([], 0);

  return result;
}

console.log(subsetWithDuplicates([1, 2, 2]));
console.log(subsetWithDuplicates([1, 2, 3, 2]));
