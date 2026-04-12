var nextGreaterElement = function (nums1, nums2) {
  let numMap = new Map();
  let stack = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    let curr = nums2[i];

    while (stack.length && stack[stack.length - 1] <= curr) {
      stack.pop();
    }

    numMap.set(curr, stack.length ? stack[stack.length - 1] : -1);
    stack.push(curr);
  }
  //   console.log(JSON.stringify([...numMap], null, 2));
  return nums1.map((num) => numMap.get(num));
};

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
// console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
// console.log(nextGreaterElement([4, 1, 2, 0], [3, 4, 2, 0, 1]));
