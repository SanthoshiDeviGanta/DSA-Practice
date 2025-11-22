/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let targetItems = [-1, -1];

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            targetItems[0] = mid;
        }
        if (target <= nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    left = 0;
    right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            targetItems[1] = mid;
        }
        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

    }
    return targetItems;
};


// let nums = [5, 7, 7, 8, 8, 10], target = 8;
let nums = [5, 7, 7, 8, 10], target = 8;
console.log(searchRange(nums, target));
