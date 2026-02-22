function sudoku() {
  const n = 9;
  // Initialize a 9x9 board with 0 or '.'
  let board = Array.from({ length: n }, () => new Array(n).fill("."));

  function isValid(row, col, num) {
    for (let i = 0; i < 9; i++) {
      // Check row
      if (board[row][i] === num) return false;
      // Check column
      if (board[i][col] === num) return false;
      // Check 3x3 sub-grid
      let startRow = Math.floor(row / 3) * 3;
      let startCol = Math.floor(col / 3) * 3;
      if (board[startRow + Math.floor(i / 3)][startCol + (i % 3)] === num)
        return false;
    }
    return true;
  }

  function solve() {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (board[row][col] === ".") {
          // Try numbers 1-9
          // Tip: To get a different board every time, shuffle this array [1..9]
          let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

          for (let num of numbers) {
            if (isValid(row, col, num)) {
              board[row][col] = num;

              if (solve()) return true; // Move to next empty cell

              board[row][col] = "."; // Backtrack
            }
          }
          return false; // No number fits here, trigger backtracking
        }
      }
    }
    return true; // All cells filled
  }

  solve();
  return formatBoard(board);
}

// Your custom formatting logic
function formatBoard(board) {
  let table = [];
  for (let i = 0; i < board.length; i++) {
    if (i % 3 === 0 && i !== 0) table.push("------+-------+------");
    let rowStr = board[i]
      .map((val, j) => (j % 3 === 0 && j !== 0 ? "| " + val : val))
      .join(" ");
    table.push(rowStr);
  }
  return table.join("\n");
}

console.log(sudoku());
