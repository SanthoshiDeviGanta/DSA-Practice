// var findClosestElements = function (arr, k, x) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = left + Math.floor((right - left) / 2);

//         if (nums[mid] === x) {
//             return nums[mid];
//         }
//         if (x < nums[mid]) {
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }
// };


var findClosestElements = function (arr, nearLength, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target || arr[i] > target) {
            return arr.slice(i, nearLength)
        }
    }
}


console.log(findClosestElements([1, 3, 3, 4, 5], 4, 2));

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));

let arr1 = [1, 1, 2, 3, 4, 5];
console.log(findClosestElements(arr1, 4, -1));