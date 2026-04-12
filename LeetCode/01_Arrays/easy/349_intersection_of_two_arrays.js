function checkElement(nums, newSet) {
    let result = [];
    for (let num of nums) {
        if (newSet.has(num)) {
            result.push(num);
        }
    }

    return [...new Set(result)];
}

var intersection = function (nums1, nums2) {
    if (nums1.length < nums2.length) {
        let newSet = new Set(nums2);
        return checkElement(nums1, newSet);
    } else {
        let newSet = new Set(nums1);
        return checkElement(nums2, newSet);
    }
};

let nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
console.log(intersection(nums1, nums2));
