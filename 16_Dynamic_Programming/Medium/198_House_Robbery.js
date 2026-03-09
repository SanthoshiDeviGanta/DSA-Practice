var rob = function (nums) {
  let store = [nums[0]];
  store[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    let max = Math.max(store[i - 2] + nums[i], store[i - 1]);
    store[i] = max;
  }
  console.log("store", store);

  return store[nums.length - 1];
};

// console.log(rob([2, 7, 9, 3, 1, 5, 8]));
console.log(rob([1, 2, 3, 1]));
