class Solution {
  minSwaps(nums) {
    // code here
    let oneCount = 0;

    for (let num of nums) {
      if (num) oneCount++;
    }

    if (oneCount === 0) return -1;
    if (oneCount == nums.length) return 0;

    console.log("oneCount", oneCount);

    let windowOneCount = 0;
    let lastIdx = oneCount - 1;
    let left = 0;
    let minSwaps = Infinity;

    for (let i = 0; i <= lastIdx; i++) {
      if (nums[i]) windowOneCount++;
    }

    while (lastIdx < nums.length) {
      console.log("windowOneCount", left, lastIdx, windowOneCount);
      minSwaps = Math.min(minSwaps, oneCount - windowOneCount);
      nums[left] === 1 ? windowOneCount-- : windowOneCount;
      left++;
      lastIdx++;
      nums[lastIdx] === 1 ? windowOneCount++ : windowOneCount;
    }

    return minSwaps;
  }
}

let sol = new Solution();
console.log(sol.minSwaps([1, 0, 1, 0, 1, 1]));

console.log(sol.minSwaps([1, 0, 1, 0, 1]));
