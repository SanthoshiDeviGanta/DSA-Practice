function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        // Checking left sorted 
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1
            }
        }

        // Checking right sorted
        if (nums[mid] <= nums[right]) {
            if (nums[mid] <= target && target < nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1
}



// let nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// [nums = 4, 5, 6, 7, 0, 1, 2], target = 3
nums = [1], target = 0
console.log(search(nums, target));
