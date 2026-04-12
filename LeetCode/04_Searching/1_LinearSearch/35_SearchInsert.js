// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function (nums, target) {
    let insertPos = 0;
    if (nums[0] > target) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (nums[i] < target && nums[i + 1] > target) {
            insertPos = i + 1;
        }
    }
    return insertPos || nums.length;
};