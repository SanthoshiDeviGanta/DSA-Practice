var minEatingSpeed = function (piles, h) {
    let left = 0;
    let right = Math.max(...piles);
    // console.log('right', right);
    while (left < right) {
        let sum = 0;
        let mid = left + Math.floor((right - left) / 2);

        for (let i = 0; i < piles.length; i++) {
            sum = sum + Math.ceil(piles[i] / mid);
        }

        // console.log("mid", mid, "sum", sum);
        // if (sum === h) {
        //     right = mid;
        // }
        if (sum > h) {
            left = mid + 1;
        } else {
            right = mid;
        }
        // console.log("left", left, "right", right);
    }
    return left;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));

console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));

console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));

// console.log(minEatingSpeed(piles, h));

// console.log(minEatingSpeed(piles, h));


