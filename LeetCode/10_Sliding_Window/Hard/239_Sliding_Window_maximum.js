var maxSlidingWindow = function (nums, k) {
  let ans = [];
  let queue = [];
  let x = 0;
  let left = 0;

  while (left < nums.length) {
    while (queue.length > 0 && nums[left] > queue[queue.length - 1]) {
      queue.pop();
    }
    queue.push(nums[left]);
    if (left >= k - 1) {
      ans.push(queue[0]);

      if (nums[x] === queue[0]) {
        queue.shift();
      }
      x++;
    }
    left++;
    // console.log("queue", queue);
  }

  return ans;
};

// console.log(maxSlidingWindow([1, 5, -1, -3, 2, 3, 6, 7], 3)); //[5,5,2,3,6,7]
// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); //[3,3,5,5,6,7]
console.log(maxSlidingWindow([1, -1], 1)); //[5,5,2,3,6,7]
