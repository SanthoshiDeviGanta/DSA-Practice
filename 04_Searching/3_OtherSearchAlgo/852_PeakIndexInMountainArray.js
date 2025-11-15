var peakIndexInMountainArray = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (right - left > 3) {
        let mid = Math.floor((right - left) / 3);
        let mid1 = left + mid;
        let mid2 = right - mid;
        if (nums[mid1] < nums[mid2]) {
            left = mid1 + 1;
        } else {
            right = mid2 - 1;
        }
    }
    let peak = left;
    for (let i = left; i <= right; i++) {
        if (nums[peak] < nums[i]) {
            peak = i;
        }
    }
    // return [peak, nums[peak]];
    return peak;

}




console.log(peakIndexInMountainArray([2, 4, 7, 11, 15, 18, 20, 23, 21, 17, 12, 8, 6, 5, 3, 1]));
// console.log(peakIndexInMountainArray([1, 3, 5, 6, 8, 12, 17, 21, 23, 20, 18, 15, 11, 7, 4, 2]));