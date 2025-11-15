// Ternary Search

var peakIndexInMountainArray = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};

console.log(peakIndexInMountainArray([1, 3, 5, 6, 8, 12, 17, 21, 23, 20, 18, 15, 11, 7, 4, 2]));