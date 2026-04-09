//  DP -- Bottom Up approach -- TC = O(n^2) SC = O(n)
var lengthOfLIS1 = function (nums) {
  let nL = nums.length;
  let lis = new Array(nL).fill(1);
  let lisMax = 1;

  for (let i = 1; i < nL; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
        lisMax = Math.max(lisMax, lis[i]);
      }
    }
    console.log("lis", lis);
  }

  return lisMax;
};

// Binary Search + Greedy  = TC = O(n logn)., SC= O(n)
var lengthOfLIS = function (nums) {
  let seq = [nums[0]];

  for (let i = 0; i < nums.length; i++) {
    console.log("seq", seq);
    if (seq[seq.length - 1] < nums[i]) {
      seq.push(nums[i]);
      continue;
    }

    let left = 0;
    let right = seq.length - 1;

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (seq[mid] < nums[i]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    seq[left] = nums[i];
  }
  console.log("seq", seq);
  return seq.length;
};

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([3, 5, 6, 2, 4, 19, 7, 12]));
