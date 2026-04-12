var permute = function (nums) {
  let result = [];

  function backTrack(path) {
    // console.log(path);
    if (path.length === nums.length) {
      result.push([...path]);
    }

    for (let i = 0; i < nums.length; i++) {
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        backTrack(path, i + 1);
        path.pop();
      }
    }
  }
  backTrack([]);

  return result;
};

console.log(permute([1, 2, 3]));
