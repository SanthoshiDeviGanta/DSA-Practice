var twoSum = function (nums, target) {
  let numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let rem = target - nums[i];
    if (numsMap.has(rem)) {
      return [numsMap.get(rem), i];
    } else {
      numsMap.set(nums[i], i);
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
