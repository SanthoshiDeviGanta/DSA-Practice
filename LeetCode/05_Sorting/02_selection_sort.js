
function findMin(nums, index) {
    let minIndex = index;
    for (let i = index + 1; i < nums.length; i++) {
        if (nums[minIndex] > nums[i]) {
            minIndex = i;
        }
    }
    // console.log("minIndex", minIndex, nums[minIndex]);

    return minIndex;
}

function selectionSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let minValue = findMin(nums, i);
        if (minValue !== i) {
            [nums[i], nums[minValue]] = [nums[minValue], nums[i]];
        }
        console.log("nums", i, nums);
    }

    return nums;
}


// let nums1 = [9, 1, 2, 3];
// console.log(selectionSort(nums1));

// let nums2 = [9, 10, 1, 2, 3];
// console.log(selectionSort(nums2));

// let nums3 = [1, 2, 3, 4, 5, 6, 7];
// console.log(selectionSort(nums3));

let nums4 = [4, 5, 2, -8];
console.log(selectionSort(nums4));