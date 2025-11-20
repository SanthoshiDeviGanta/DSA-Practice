
let bad = 4;

function isBadVersion(version) {
    return version >= bad;
}

function solution(isBadVersionFn) {
    return function (n) {
        let left = 1;
        let right = n;
        while (left < right) {
            let mid = Math.floor((right + left) / 2);
            if (isBadVersionFn(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return right;
    }
}

console.log(solution(isBadVersion)(6));


// // ------------------------------
// // 1. Create isBadVersion() for local testing
// // ------------------------------
// function createIsBadVersion(firstBad) {
//     return function (version) {
//         return version >= firstBad;
//     };
// }

// // change this number to test different cases
// const firstBad = 7;
// const isBadVersion = createIsBadVersion(firstBad);


// // ------------------------------
// // 2. LeetCode-style solution()
// // ------------------------------
// function solution(isBadVersion) {
//     return function (n) {
//         let left = 1, right = n;

//         while (left < right) {
//             let mid = Math.floor(left + (right - left) / 2);
//             if (isBadVersion(mid)) {
//                 right = mid;        // search left
//             } else {
//                 left = mid + 1;     // search right
//             }
//         }

//         return left; // first bad version
//     };
// }


// // ------------------------------
// // 3. Testing the code locally
// // ------------------------------
// const findFirstBad = solution(isBadVersion);

// console.log("First bad version is:", findFirstBad(20));
