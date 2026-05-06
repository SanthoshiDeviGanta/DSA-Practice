var rotateTheBox = function (box) {
  const rows = box.length;
  const colums = box[0].length;

  // Step 1: Let stones "fall" to the right within each row
  for (let i = 0; i < rows; i++) {
    let emptyPos = colums - 1; // the rightmost position where a stone can fall

    for (let j = colums - 1; j >= 0; j--) {
      if (box[i][j] === "*") {
        // Obstacle: reset emptyPos to just left of obstacle
        emptyPos = j - 1;
      } else if (box[i][j] === "#") {
        // Stone: move it as far right as possible
        if (j !== emptyPos) {
          box[i][emptyPos] = "#";
          box[i][j] = ".";
        }
        emptyPos--;
      }
      // If it's '.', do nothing
    }
  }

  console.log("box", box);

  // Step 2: Rotate the box 90 degrees clockwise
  const res = Array.from({ length: colums }, () => Array(rows).fill("."));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < colums; j++) {
      res[j][rows - 1 - i] = box[i][j];
      console.log("res", res);
    }
  }

  //   return res;
};

// console.log(
//   rotateTheBox([
//     ["#", ".", ".", "*", "."],
//     ["#", "#", ".", "*", "."],
//   ]),
// );

console.log(
  rotateTheBox([
    ["#", ".", "*", "."],
    ["#", "#", "*", "."],
  ]),
);
