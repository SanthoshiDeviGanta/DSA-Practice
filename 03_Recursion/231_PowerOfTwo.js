function isPowerOfTwo(n) {
    // console.log(n);
    if (n <= 0) return false;
    if (n === 1) return true;
    return n % 2 === 0 && isPowerOfTwo(n / 2);
};


// var isPowerOfTwo = function (n) {
//     if (n <= 0) {
//         return false;
//     }
//     console.log(n.toString(2), n.toString(2).indexOf('1'), n.toString(2).lastIndexOf('1'));
//     // n.toString(2) -- converts number to Binary code
//     return n.toString(2).indexOf('1') === n.toString(2).lastIndexOf('1');
// };


let n = 18;
console.log(isPowerOfTwo(n));
// let n1 = 32;
// console.log(isPowerOfTwo(n1));
// let n2 = 0;
// console.log(isPowerOfTwo(n2));