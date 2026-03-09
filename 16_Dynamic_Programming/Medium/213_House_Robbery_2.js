var rob = function (nums) {
  let nL = nums.length;
  if (nL === 1) return nums[0];

  let prev11 = 0;
  let prev12 = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let max = Math.max(prev11, prev12 + nums[i]);

    prev12 = prev11;
    prev11 = max;
  }

  let prev21 = 0;
  let prev22 = 0;
  for (let i = 1; i < nums.length; i++) {
    let max = Math.max(prev21, prev22 + nums[i]);

    prev22 = prev21;
    prev21 = max;
  }

  return Math.max(prev11, prev21);
};

// console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 3, 2]));
