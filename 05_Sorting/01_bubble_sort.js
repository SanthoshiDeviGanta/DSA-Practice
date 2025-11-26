
// function bubbleSort(nums) {
//     let numsLength = nums.length - 1
//     for (let i = 0; i < numsLength; i++) {
//         let count = 0;
//         for (let j = 0; j < numsLength - i; j++) {
//             if (nums[j] > nums[j + 1]) {
//                 [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//             }
//             else {
//                 count++;
//             }
//         }
//         console.log("count", count, 'numsLength - i', numsLength - i);
//         if (count === numsLength - i) {
//             return nums;
//         }
//     }
//     return nums;
// }

function bubbleSort(nums) {
    let numsLength = nums.length - 1
    for (let i = 0; i < numsLength; i++) {
        let swapped = false;
        for (let j = 0; j < numsLength - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                swapped = true;
            }
        }
        console.log("nums", i, nums);
        if (!swapped) {
            break;
        }
    }
    return nums;
}


let nums = [5, 4, 2, 1, 3];
console.log(bubbleSort(nums));

// let nums1 = [9, 1, 2, 3];
// console.log(bubbleSort(nums1));

// let nums2 = [9, 10, 1, 2, 3];
// console.log(bubbleSort(nums2));

// let nums3 = [1, 2, 3, 4, 5, 6, 7];
// console.log(bubbleSort(nums3));

// let nums3 = [5, 1, 4, 2, 8];
// console.log(bubbleSort(nums3));
