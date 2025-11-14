
function sumOfAllNumbers(index) {
    if (index === 0) return nums[index];
    return nums[index] + sumOfAllNumbers(index - 1);
}

let nums = [5, 3, 2, 0, 1];
console.log(sumOfAllNumbers(nums.length - 1));