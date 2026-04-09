// function segregate0and1(nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       count++;
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = i < count ? 0 : 1;
//   }
//   return nums;
// }

function segregate0and1(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      [nums[i], nums[x]] = [nums[x], nums[i]];
      x++;
    }
  }

  return nums;
}

console.log(segregate0and1([0, 1, 0, 1, 0, 0, 1, 1, 1, 0]));
