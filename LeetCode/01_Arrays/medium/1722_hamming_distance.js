var minimumHammingDistance = function (source, target, allowedSwaps) {
  let count = 0;

  for (let pair of allowedSwaps) {
    let [i, j] = pair;
    [source[i], source[j]] = [source[j], source[i]];
    console.log("source", source);
  }

  for (let i = 0; i < source.length; i++) {
    if (source[i] != target[i]) {
      count++;
    }
  }
  return count;
};

console.log(
  minimumHammingDistance(
    [5, 1, 2, 4, 3],
    [1, 5, 4, 2, 3],
    [
      [0, 4],
      [4, 2],
      [1, 3],
      [1, 4],
    ],
  ),
);

// console.log(
//   minimumHammingDistance(
//     [1, 2, 3, 4],
//     [2, 1, 4, 5],
//     [
//       [0, 1],
//       [2, 3],
//     ],
//   ),
// );
