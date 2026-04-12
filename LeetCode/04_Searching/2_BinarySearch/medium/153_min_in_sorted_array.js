var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // solved sorted array case
        if (nums[left] <= nums[right]) {
            return nums[left];
        }
        let mid = Math.floor((left + right) / 2);
        // console.log('left', left);

        if (nums[mid - 1] > nums[mid]) {
            return nums[mid]
        }
        if (nums[left] > nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

// console.log(findMin())
console.log(findMin([1]));
console.log(findMin([11, 13, 15, 17]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([3, 1, 2]));

// console.log(findMin());
