function threeSum(nums) {
  let ans = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      twoSumOfSorted(nums, i, ans);
    }
  }
  return ans;
}

function twoSumOfSorted(nums, currInd, ans) {
  let left = currInd + 1;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right] + nums[currInd];
    if (sum === 0) {
      ans.push([nums[currInd], nums[left], nums[right]]);
      left++;
      right--;
      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(threeSum([-1, 0, 1, 2, 2, -1, -4, -1, 2]));
