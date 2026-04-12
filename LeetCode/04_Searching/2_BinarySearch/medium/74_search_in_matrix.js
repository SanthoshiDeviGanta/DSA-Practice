var searchMatrix = function (matrix, target) {
    let top = 0;
    let bottom = matrix.length - 1;
    while (top <= bottom) {
        let midRow = top + Math.floor((bottom - top) / 2);

        let nums = matrix[midRow];
        let left = 0;
        let right = nums.length - 1;

        if (nums[left] > target) {
            bottom = midRow - 1;
        } else if (nums[right] < target) {
            top = midRow + 1;
        } else {
            // if (nums[left] < target && nums[right] > target)  -- similar to check existence in between array
            while (left <= right) {
                let mid = left + Math.floor((right - left) / 2);
                if (nums[mid] === target) {
                    return true;
                }
                if (nums[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return false;
        }
    }

    return false;
};

// let matrix = [[1, 3, 4, 5, 7], [10, 11, 15, 16, 20], [23, 30, 32, 34, 60]], target = 3;
// console.log(searchMatrix(matrix, target));


// let matrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target1 = 30;
// console.log(searchMatrix(matrix1, target1));

// let matrix2 = [[1, 3, 4, 5, 7], [10, 11, 15, 16, 20], [23, 30, 32, 34, 60]], target2 = 5;
// console.log(searchMatrix(matrix2, target2));

let matrix3 = [[1, 3, 4, 5, 7], [10, 11, 15, 16, 20], [23, 30, 32, 34, 60]], target3 = 35;
console.log(searchMatrix(matrix3, target3));