// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function (nums, target) {
    if (nums[0] > target) {
        return 0;
    }
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}