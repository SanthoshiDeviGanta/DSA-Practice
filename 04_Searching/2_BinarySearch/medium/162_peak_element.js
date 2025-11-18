

// var findPeakElement = function (nums) {
//     let left = 0;
//     let right = nums.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (nums[mid] < nums[mid + 1]) {
//             left = mid + 1
//         } else {
//             right = mid - 1;
//         }
//     }
//     return left;
// };

var findPeakElement = function (arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < arr[m + 1]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};




// console.log(findPeakElement([3, 4, 3, 2, 1]));
// console.log(findPeakElement([3]));
console.log(findPeakElement([5, 1, 2, 3, 4]));
// console.log(findPeakElement([1, 3, 2, 4, 3]));
// console.log(findPeakElement([4, 5, 3, 2, 1]));
// console.log(findPeakElement());






