function isToeplitz(mat) {
  // code here

  for (let i = 0; i < mat.length - 1; i++) {
    for (let j = 0; j < mat[0].length - 1; j++) {
      if (mat[i][j] !== mat[i + 1][j + 1]) {
        return false;
      }
    }
  }

  return true;
}

// 00 11 22 33

console.log(
  isToeplitz([
    [6, 7, 8],
    [4, 6, 7],
    [1, 4, 6],
  ]),
);

// console.log(
//   isToeplitz([
//     [6, 7, 8],
//     [4, 12, 7],
//     [1, 4, 15],
//   ]),
// );
