// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// JUMP SEARCH

function searchInsert(nums, target) {
    let numlength = nums.length;
    let jumpValue = Math.floor(Math.sqrt(nums.length));
    let left = 0;
    let right = jumpValue;


    while (left < numlength && nums[right - 1] < target) {
        left = right;
        right += jumpValue;
    }
    while (nums[left] < target) {
        left++;
    }
    return [left, nums[left]];
}

// More checking for not exceding cases
// var searchInsert = function (nums, target) {
//     const numLength = nums.length;
//     const jumpValue = Math.floor(Math.sqrt(numLength));

//     let left = 0;
//     let right = jumpValue;

//     while (left < numLength && nums[right - 1] < target) {
//         left = right;
//         right += jumpValue;
//         if (left >= numLength) return numLength;
//     }

//     while (left < Math.min(right, numLength) && nums[left] < target) {
//         left++;
//     }
//     return left;
// };


console.log(searchInsert([2, 5, 8, 12, 15, 18, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70], 32));