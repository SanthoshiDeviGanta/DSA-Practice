var solveNQueens = function (n) {
  //   let board = new Array(n).fill(new Array(n).fill("."));
  let board = Array.from({ length: n }, () => new Array(n).fill("."));
  //   console.log(board);
  let result = [];

  function backTrack(row, colSet, diaSet, antiDiaSet) {
    if (row === n) {
      let b1 = board.map((x) => x.join(""));
      // result.push(b1);
      return b1;
    }
    for (let col = 0; col < n; col++) {
      if (
        colSet.has(col) ||
        diaSet.has(row - col) ||
        antiDiaSet.has(row + col)
      ) {
        continue;
      }

      board[row][col] = "Q";

      colSet.add(col);
      diaSet.add(row - col);
      antiDiaSet.add(row + col);

      // 2. RECURSIVE CHECK: If the next call found a solution,
      // return it immediately to stop the loop and parent calls.
      let result = backTrack(row + 1, colSet, diaSet, antiDiaSet);
      if (result) return result;

      board[row][col] = ".";
      colSet.delete(col);
      diaSet.delete(row - col);
      antiDiaSet.delete(row + col);

      //   console.log(board);
    }
    // 3. Return null if this branch didn't lead to a solution
    return null;
  }

  return backTrack(0, new Set(), new Set(), new Set());
};

console.log(solveNQueens(4));
