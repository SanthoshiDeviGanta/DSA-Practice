function hasTripletSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (checkTwoSum(nums, i + 1, target - nums[i])) {
      return true;
    }
  }

  return false;
}

function checkTwoSum(nums, initial, target) {
  let numsSet = new Set();
  for (let i = initial; i < nums.length; i++) {
    let rem = target - nums[i];
    if (numsSet.has(rem)) {
      return true;
    } else {
      numsSet.add(nums[i]);
    }
  }
  return false;
}

// function hasTripletSum(nums, target) {
//   // 1. Sort the array to use the two-pointer technique
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length - 2; i++) {
//     // 2. Target for the other two numbers
//     let remainingTarget = target - nums[i];

//     // 3. Initialize pointers for the rest of the array
//     let left = i + 1;
//     let right = nums.length - 1;

//     while (left < right) {
//       let currentSum = nums[left] + nums[right];

//       if (currentSum === remainingTarget) {
//         return true; // Triplet found
//       } else if (currentSum < remainingTarget) {
//         left++; // Need a larger sum
//       } else {
//         right--; // Need a smaller sum
//       }
//     }
//   }

//   return false;
// }

// Example usage:
// const numbers = [12, 3, 4, 1, 6, 9];
// const target = 24;
// console.log(hasTripletSum(numbers, target)); // true (12 + 3 + 9)

// console.log(hasTripletSum([1, 4, 45, 6, 10, 8], 13));
// console.log(hasTripletSum([40, 20, 10, 3, 6, 7], 24));

console.log(
  hasTripletSum(
    [166, 200, 157, 139, 127, 19, 48, 97, 114, 189, 170, 15, 14],
    208,
  ),
);
