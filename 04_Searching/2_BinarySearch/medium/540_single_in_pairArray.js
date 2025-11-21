// var singleNonDuplicate = function (nums) {

//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         let mid = left + Math.floor((right - left) / 2);
//         let prev = mid - 1 >= 0 ? nums[mid - 1] : null;
//         let next = mid + 1 < nums.length ? nums[mid + 1] : null;

//         if (nums[mid] != prev && nums[mid] != next) {
//             return nums[mid];
//         }

//         if (mid % 2 === 0) {
//             if (nums[mid] === next) {
//                 left = mid + 2;
//             } else {
//                 right = mid - 1;
//             }
//         }

//         if (mid % 2 !== 0) {
//             if (nums[mid] === prev) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//     }
// };

var singleNonDuplicate = function (nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Make sure mid is always even (pair starts at even index)
        if (mid % 2 === 1) {
            mid--;
        }

        // If pair is correct → single element on the right
        if (nums[mid] === nums[mid + 1]) {
            left = mid + 2;
        } else {
            // Pair is broken → single element is at mid or left side
            right = mid;
        }
    }

    // left == right → single element
    return nums[left];
};


let nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log(singleNonDuplicate(nums));

let nums1 = [1, 1, 2, 2, 3, 4, 4, 8, 8];
console.log(singleNonDuplicate(nums1));

let nums2 = [1, 1, 2, 2, 3, 3, 4, 8, 8];
console.log(singleNonDuplicate(nums2));


let nums3 = [3, 3, 7, 7, 10, 11, 11];
console.log(singleNonDuplicate(nums3));


let nums4 = [3, 7, 7, 10, 10, 11, 11];
console.log(singleNonDuplicate(nums4));
