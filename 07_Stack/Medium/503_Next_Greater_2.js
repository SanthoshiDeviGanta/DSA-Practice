// Doubling the array and storing the result also twice , makes the space complexity double and doesnt look optimised
var nextGreaterElements1 = function (nums) {
  let numsDb = [...nums, ...nums];
  let stack = [];
  let numMap = new Array(numsDb.length).fill(0);

  for (let i = numsDb.length - 1; i >= 0; i--) {
    let curr = numsDb[i];

    while (stack.length && curr >= stack[stack.length - 1]) {
      stack.pop();
    }

    let top = stack.length ? stack[stack.length - 1] : -1;
    numMap[i] = top;
    stack.push(curr);
  }

  return numMap.slice(0, nums.length);
};

// Here we will make the looping index to double but still point to the relevant index values

function nextGreaterElements(nums) {
  let stack = [];
  let numMap = new Array(nums.length).fill(-1);

  for (let i = nums.length * 2 - 1; i >= 0; i--) {
    let index = i % nums.length;
    let curr = nums[index];
    while (stack.length && curr >= stack[stack.length - 1]) {
      stack.pop();
    }
    if (i < nums.length) {
      let top = stack.length ? stack[stack.length - 1] : -1;
      numMap[index] = top;
    }
    stack.push(curr);
  }

  return numMap;
}

console.log(nextGreaterElements([1, 2, 3, 4, 3]));
