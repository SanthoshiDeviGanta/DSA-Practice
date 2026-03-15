var maxProduct = function (nums) {
  let minProd = nums[0];
  let maxProd = nums[0];
  let maxVal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let maxProdTemp = maxProd;
    maxProd = Math.max(nums[i], maxProd * nums[i], minProd * nums[i]);
    minProd = Math.min(nums[i], maxProdTemp * nums[i], minProd * nums[i]);
    maxVal = Math.max(maxVal, maxProd);
  }

  return maxVal;
};

console.log(maxProduct([2, -5, -2, -4, 3]));
// console.log(maxProduct([2, -5, 3, 1, -4, 0, -10, 2, 8]));
// console.log(maxProduct([2, 3, -2, 4]));
