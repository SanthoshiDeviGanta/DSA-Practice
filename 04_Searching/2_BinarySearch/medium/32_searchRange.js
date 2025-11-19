// function searchRange(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     let targetItems = [-1, -1];

//     // find first occurrence
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (target <= nums[mid]  ) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }

//         if (nums[mid] === target) {
//             targetItems[0] = mid;
//         }
//     }

//     // reset pointers for last occurrence
//     left = 0;
//     right = nums.length - 1;

//     // find last occurrence
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (nums[mid] <= target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }

//         if (nums[mid] === target) {
//             targetItems[1] = mid;
//         }
//     }

//     return targetItems;
// }


let nums = [5, 7, 7, 8, 8, 10], target = 8;

console.log(searchRange(nums, target));


// console.log("san 222 left", left, nums[left], 'right', right, nums[right]);