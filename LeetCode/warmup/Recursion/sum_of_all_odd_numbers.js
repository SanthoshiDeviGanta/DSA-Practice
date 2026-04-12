
function sumOfAllOddNumbers(index) {
    if (index < 0) return 0;
    return (nums[index] % 2 !== 0 ? nums[index] : 0) + sumOfAllOddNumbers(index - 1)
}


let nums = [5, 3, 2, 0, 1, 7, 8];
console.log(sumOfAllOddNumbers(nums.length - 1));