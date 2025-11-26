function insertionsort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        let prev = i - 1;
        while (nums[prev] > current && prev >= 0) {
            nums[prev + 1] = nums[prev];
            console.log("nums", nums);
            prev--;
        }
        console.log("nums-------", nums);
        nums[prev + 1] = current;


    }

    return nums;
}

console.log(insertionsort([3, 2, 7, 5, 2, 1]));
