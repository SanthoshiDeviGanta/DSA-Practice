function suduko(n) {
  let basicBoard = Array.from({ length: n }, () => new Array(n).fill("."));
  let result = [];

  function backTrack(board, row, boardValue, colSet, diaSet, antiDiaSet) {
    if (row === n) {
      // return board.map((x) => x.join(""));
      let table = [];
      for (let i = 0; i < board.length; i++) {
        if (i % 3 === 0 && i !== 0) {
          table.push("------+-------+------");
          // console.log("------+-------+------");
        }

        let row = board[i]
          .map((val, j) => (j % 3 === 0 && j !== 0 ? "| " + val : val))
          .join(" ");

        // console.log(row);
        table.push(row);
      }

      return table;
    }
    for (let col = 0; col < n; col++) {
      if (
        colSet.has(col) ||
        diaSet.has(row - col) ||
        antiDiaSet.has(row + col)
      ) {
        continue;
      }
      board[row][col] = boardValue;
      colSet.add(col);
      diaSet.add(row - col);
      antiDiaSet.add(row + col);

      let result = backTrack(
        board,
        row + 1,
        boardValue,
        colSet,
        diaSet,
        antiDiaSet,
      );
      if (result) return result;

      board[row][col] = ".";
      colSet.delete(col);
      diaSet.delete(row - col);
      antiDiaSet.delete(row + col);
    }

    return null;
  }
  // for (let boardValue = 1; boardValue <= 9; boardValue++) {
  //   console.log(boardValue);
  // }
  return backTrack(basicBoard, 0, 1, new Set(), new Set(), new Set());
}

console.log(suduko(9));
