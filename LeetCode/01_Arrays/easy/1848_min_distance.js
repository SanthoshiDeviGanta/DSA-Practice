var getMinDistance = function (nums, target, start) {
  let minVal = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      minVal = Math.min(minVal, Math.abs(i - start));
    }
  }

  return minVal;
};

console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3));

console.log(getMinDistance([1], 1, 0));

console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0));
