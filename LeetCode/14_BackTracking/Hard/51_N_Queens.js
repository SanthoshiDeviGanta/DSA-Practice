var solveNQueens = function (n) {
  //   let board = new Array(n).fill(new Array(n).fill("."));
  let board = Array.from({ length: n }, () => new Array(n).fill("."));
  //   console.log(board);
  let result = [];

  function backTrack(row, colSet, diaSet, antiDiaSet) {
    if (row === n) {
      let b1 = board.map((x) => x.join(""));
      result.push(b1);
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

      backTrack(row + 1, colSet, diaSet, antiDiaSet);

      board[row][col] = ".";
      colSet.delete(col);
      diaSet.delete(row - col);
      antiDiaSet.delete(row + col);

      //   console.log(board);
    }
  }

  backTrack(0, new Set(), new Set(), new Set());

  //   console.log(board);

  return result;
};

console.log(solveNQueens(4));
