
var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set();

    for (let num of nums2) {
        if (set1.has(num)) {
            set2.add(num);
        }
    }
    return [...set2];
};

let nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
console.log(intersection(nums1, nums2));
