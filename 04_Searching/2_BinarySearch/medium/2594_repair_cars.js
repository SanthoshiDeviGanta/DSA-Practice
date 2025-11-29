var repairCars = function (ranks, cars) {
    let left = 1;
    // let right = Math.max(...ranks) * cars * cars;
    let right = Math.min(...ranks) * cars * cars;


    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        let sum = 0;
        for (let i = 0; i < ranks.length; i++) {
            sum = sum + Math.floor(Math.sqrt(mid / ranks[i]));
        }
        console.log("mid", mid, "left", left, "right", right);
        // console.log("sum", sum);

        if (sum >= cars) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
};

// console.log(repairCars([4, 2, 3, 1], 10));

// console.log(repairCars([5, 1, 8], 6));


// console.log(repairCars([5, 1, 8], 6));

console.log(repairCars([5, 1, 8, 16, 80], 20));

