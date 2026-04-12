//  TC = O(n) + o(n) + o(n);
// SC = O(n) + O(n);
var findMiddleIndex1 = function (nums) {
  let nL = nums.length;
  let rightSum = new Array(nL).fill(0);
  let leftSum = new Array(nL).fill(0);

  for (let i = 1; i < nL; i++) {
    leftSum[i] = leftSum[i - 1] + nums[i - 1];
  }

  for (let i = nL - 2; i >= 0; i--) {
    rightSum[i] = rightSum[i + 1] + nums[i + 1];
  }

  for (let i = 0; i < nL; i++) {
    if (leftSum[i] == rightSum[i]) {
      return i;
    }
  }

  console.log(leftSum);
  console.log(rightSum);

  return -1;
};

var findMiddleIndex = function (nums) {
  let totalSum = nums.reduce((a, c) => a + c, 0);

  console.log("totalSum", totalSum);
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum = totalSum - leftSum - nums[i];

    if (leftSum == rightSum) {
      return i;
    }
    leftSum = leftSum + nums[i];
  }

  return -1;
};

console.log(findMiddleIndex([2, 3, -1, 8, 4]));

console.log(findMiddleIndex([1, -1, 4]));
