
function merge_array(left, right) {
    let i = 0;
    let j = 0;
    let newArr = []
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            newArr.push(left[i]);
            i++;
        } else {
            newArr.push(right[j]);
            j++;
        }
    }

    return [...newArr, ...left.slice(i), ...right.slice(j)];
}

function sortArray(nums) {
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    console.log("left", left);
    let right = sortArray(nums.slice(mid));
    console.log("right", right);

    return merge_array(left, right);

    // console.log("nums.slice(0, mid)", nums.slice(0, mid));
    // console.log("nums.slice(mid)", nums.slice(mid));

    // console.log("right", right);
    // console.log("left", left);
};

console.log(sortArray([5, 2, 3, 1, 8, 7]));
