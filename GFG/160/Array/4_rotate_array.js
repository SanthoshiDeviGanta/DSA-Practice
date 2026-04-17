function rotateArr1(nums, d) {
  let nL = nums.length;
  d = d % nL;

  let first = nums.slice(0, d);
  let second = nums.slice(d);

  second.push(...first);

  return second;
}

function rotateArr2(nums, d) {
  let nL = nums.length;
  d = d % nL;

  let first = nums.slice(0, d);
  for (let i = 0; i < nL - d; i++) {
    nums[i] = nums[i + d];
  }
  for (let i = nL - d, j = 0; i < nL; i++, j++) {
    nums[i] = first[j];
  }

  console.log(nums);
}

// Reverse first d elements: reverse [1, 2] → [2, 1, 3, 4, 5, 6, 7]

// Reverse remaining: reverse [3, 4, 5, 6, 7] → [2, 1, 7, 6, 5, 4, 3]

// Reverse whole array: [3, 4, 5, 6, 7, 1, 2] (left rotation by 2)

function rotateArr(nums, d) {
  let nL = nums.length;
  d = d % nL;

  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  reverse(0, d - 1);
  reverse(d, nL - 1);
  reverse(0, nL - 1);

  return nums;
}

console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 2));
