
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    let numStr = x.toString().split('').reverse().join('');
    if (x.toString() === numStr)
        return true;
    return false;
};

// var isPalindrome = function (x) {
//     if (x < 0) {
//         return false;
//     }
//     let numStr = x.toString().split('');
//     // console.log(numStr);

//     let left = 0;
//     for (let i = numStr.length - 1; i >= numStr.length / 2; i--) {
//         // console.log("numStr[left] === numStr[i]", numStr[left], numStr[i]);
//         if (numStr[left] === numStr[i]) {
//             left++;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };

console.log('123', isPalindrome(123));
console.log('121', isPalindrome(121));
// console.log('121', isPalindrome(1234567654321));


