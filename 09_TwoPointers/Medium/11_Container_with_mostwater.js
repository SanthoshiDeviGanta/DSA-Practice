function containerWithMostWater(nums) {
  let left = 0;
  let right = nums.length - 1;
  let maxArea = 0;

  while (left < right) {
    let x = right - left;
    let y = Math.min(nums[left], nums[right]);

    maxArea = Math.max(maxArea, x * y);

    if (nums[left] < nums[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
