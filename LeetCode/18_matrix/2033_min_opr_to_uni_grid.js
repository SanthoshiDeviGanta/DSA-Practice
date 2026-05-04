var minOperations = function (grid, x) {
  grid = grid.flat();

  let base = grid[0];
  let steps = [];

  for (let val of grid) {
    if ((val - base) % x != 0) {
      return -1;
    } else {
      steps.push((val - base) / x);
    }
  }
  steps.sort((a, b) => a - b);

  let mid = Math.floor(steps.length / 2);
  let median = steps[mid];
  let count = 0;

  console.log("steps", steps, median);

  for (let val of steps) {
    count += Math.abs(val - median);
  }

  return count;
};

/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
// var minOperations = function (grid, x) {
//   // 1. Flatten the grid into a 1D array
//   const arr = grid.flat(); // or use reduce if flat() not allowed

//   const base = arr[0];

//   // 2. Check feasibility: all (val - base) must be divisible by x
//   for (let val of arr) {
//     if ((val - base) % x !== 0) {
//       return -1;
//     }
//   }

//   // 3. Convert each value to its "step index"
//   const steps = arr.map((val) => (val - base) / x);

//   // 4. Sort and pick the median of steps
//   steps.sort((a, b) => a - b);
//   const mid = Math.floor(steps.length / 2);
//   const median = steps[mid];

//   console.log("steps", steps, median);

//   // 5. Sum the absolute differences from the median
//   let ops = 0;
//   for (let k of steps) {
//     ops += Math.abs(k - median);
//   }

//   return ops;
// };

console.log(
  minOperations(
    [
      [980, 476, 644, 56],
      [644, 140, 812, 308],
      [812, 812, 896, 560],
      [728, 476, 56, 812],
    ],
    84,
  ),
);

// console.log(
//   minOperations(
//     [
//       [1, 2],
//       [3, 4],
//     ],
//     2,
//   ),
// );
