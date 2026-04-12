function exist(board, word) {
  let result = false;
  let m = board.length;
  let n = board[0].length;
  function backTrack(x, y, nextIdx) {
    if (nextIdx === word.length) {
      result = true;
    }
    let orgVal = board[x][y];
    board[x][y] = "#";
    // Bottom
    if (y < n - 1 && board[x][y + 1] === word[nextIdx]) {
      backTrack(x, y + 1, nextIdx + 1);
    }
    // Top
    if (y > 0 && board[x][y - 1] === word[nextIdx]) {
      backTrack(x, y - 1, nextIdx + 1);
    }
    // Left
    if (x > 0 && board[x - 1][y] === word[nextIdx]) {
      backTrack(x - 1, y, nextIdx + 1);
    }
    // Right
    if (x < m - 1 && board[x + 1][y] === word[nextIdx]) {
      backTrack(x + 1, y, nextIdx + 1);
    }
    board[x][y] = orgVal;
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        backTrack(i, j, 1);
      }
    }
  }

  return result;
}

let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCCED";

// console.log(exist(board, word));

let board1 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
console.log(exist(board1, "ABCB"));

// function exist(board, word) {
//   const m = board.length;
//   const n = board[0].length;

//   function backTrack(x, y, index) {
//     // Base case
//     if (index === word.length) return true;

//     // Boundary + mismatch check
//     if (
//       x < 0 || y < 0 ||
//       x >= m || y >= n ||
//       board[x][y] !== word[index]
//     ) return false;

//     let temp = board[x][y];
//     board[x][y] = "#"; // mark visited

//     let found =
//       backTrack(x + 1, y, index + 1) ||
//       backTrack(x - 1, y, index + 1) ||
//       backTrack(x, y + 1, index + 1) ||
//       backTrack(x, y - 1, index + 1);

//     board[x][y] = temp; // restore

//     return found;
//   }

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (backTrack(i, j, 0)) return true;
//     }
//   }

//   return false;
// }
