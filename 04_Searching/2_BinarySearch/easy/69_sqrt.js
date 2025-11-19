const mySqrt = (num) => {
    let left = 0;
    let right = Math.floor(num / 2);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;
        // console.log("mid", mid, 'left', left, 'right', right);
        console.log('left', left, 'right', right, "mid", mid, "square", square);


        if (square === num) {
            return mid;
        }
        if (square > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return right;
}

// console.log(mySqrt(8));
// console.log(mySqrt(100));
console.log(mySqrt(290));
console.log(mySqrt(288));
// console.log(mySqrt(2147483648));

