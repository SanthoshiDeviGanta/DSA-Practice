function suduko(n) {
  let board = Array.from({ length: n }, () => new Array(n).fill("."));
  let result = [];

  function backTrack(row, colSet, diaSet, antiDiaSet) {
    if (row === n) {
      let b1 = board.map((x) => x.join(""));
      result.push(b1);
      // return board.map((x) => x.join(""));
    }
    for (let col = 0; col < n; col++) {
      if (
        colSet.has(col) ||
        diaSet.has(row - col) ||
        antiDiaSet.has(row + col)
      ) {
        continue;
      }
      board[row][col] = "9";
      colSet.add(col);
      diaSet.add(row - col);
      antiDiaSet.add(row + col);
      backTrack(row + 1, colSet, diaSet, antiDiaSet);

      board[row][col] = ".";
      colSet.delete(col);
      diaSet.delete(row - col);
      antiDiaSet.delete(row + col);
    }
  }
  backTrack(0, new Set(), new Set(), new Set());

  //   console.log("board", board);
  return result;
}

console.log(suduko(9));

//   console.log(board);
//   console.log(JSON.stringify(board));
//   for (let row of board) {
//     console.log(row.join(" "));
//   }
//   for (let i = 0; i < board.length; i++) {
//     if (i % 3 === 0 && i !== 0) {
//       console.log("------+-------+------");
//     }

//     let row = board[i]
//       .map((val, j) => (j % 3 === 0 && j !== 0 ? "| " + val : val))
//       .join(" ");

//     console.log(row);
//   }
//   console.log("------+-------+------------+-------+------");
