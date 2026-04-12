function orangesRotting1(grid) {
  // finding the height and width of grid
  let w = grid.length;
  let h = grid[0].length;
  let queue = [];
  let minutes = [];
  let check;
  let count = 0;
  // To find the rotten(2) indexes and add to them to queue
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  // console.log("queue", queue);
  minutes.push(queue.length);
  check = queue.length;

  // Mark adj nodes any rotten and add them again to queue repeat queue is empty and track the minutes
  while (queue.length) {
    // Rotten orange
    let [x, y] = queue.shift();
    if (check > 0) {
      check--;
    } else {
      check = count - 1;
      minutes.push(count);
      count = 0;
    }

    // Checking 4 directional oranges and marking them rotten
    // console.log("x", x, "   y", y);
    // Left orange
    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y]);
      count++;
    }
    // Right Orange
    if (x < w - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y]);
      count++;
    }
    // Top Orange
    if (y < h - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1]);
      count++;
    }
    // Bottom Orange
    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1]);
      count++;
    }
    // console.log("san at while end", queue);
    // console.log("grid after while", grid);
  }

  console.log("minutes", minutes);
  console.log("grid after while", grid[0]);
  console.log("grid after while", grid[1]);
  console.log("grid after while", grid[2]);

  // Traverse through entire grid again to find any fresh oranges, if yes return -1 otherwise return minutes
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return minutes.length - 1;
}

function orangesRotting2(grid) {
  // finding the height and width of grid
  let w = grid.length;
  let h = grid[0].length;
  let queue = [];
  let maxMinutes = 0;
  // To find the rotten(2) indexes and add to them to queue
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }
  // console.log("queue", queue);

  // Mark adj nodes any rotten and add them again to queue repeat queue is empty and track the minutes
  while (queue.length) {
    // Rotten orange
    let [x, y, level] = queue.shift();

    // Checking 4 directional oranges and marking them rotten
    // console.log("x", x, "   y", y);
    // Left orange
    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, level + 1]);
    }
    // Right Orange
    if (x < w - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, level + 1]);
    }
    // Top Orange
    if (y < h - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, level + 1]);
    }
    // Bottom Orange
    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, level + 1]);
    }
    maxMinutes = Math.max(level, maxMinutes);
    // console.log("san at while end", queue);
    // console.log("grid after while", grid);
  }
  // Traverse through entire grid again to find any fresh oranges, if yes return -1 otherwise return minutes
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return maxMinutes;
}

function orangesRotting3(grid) {
  let rows = grid.length;
  let columns = grid[0].length;
  let rottenQueue = [];
  let freshOranges = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === 2) {
        rottenQueue.push([i, j]);
      } else if (grid[i][j] === 1) {
        freshOranges++;
      }
    }
  }
  let minutes = 0;
  if (freshOranges === 0) {
    return minutes;
  }

  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let head = 0;

  while (head < rottenQueue.length) {
    let level = rottenQueue.length - head;
    let isRottenInMinute = false;
    for (let i = 0; i < level; i++) {
      let [x, y] = rottenQueue[head];
      head++;
      for (let [r, c] of directions) {
        let dr = x + r;
        let dc = y + c;

        if (
          dr >= 0 &&
          dr < rows &&
          dc >= 0 &&
          dc < columns &&
          grid[dr][dc] === 1
        ) {
          grid[dr][dc] = 2;
          rottenQueue.push([dr, dc]);
          freshOranges--;
          isRottenInMinute = true;
        }
      }
    }
    if (isRottenInMinute) {
      minutes++;
    }
  }
  return freshOranges === 0 ? minutes : -1;
}

function orangesRotting(grid) {
  let rows = grid.length;
  let columns = grid[0].length;
  let freshOranges = 0;
  let rottenQueue = [];
  let minutes = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === 2) {
        rottenQueue.push([i, j]);
      } else if (grid[i][j] === 1) {
        freshOranges++;
      }
    }
  }

  if (freshOranges === 0) {
    return minutes;
  }

  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (rottenQueue.length && freshOranges > 0) {
    let currLen = rottenQueue.length;

    for (let i = 0; i < currLen; i++) {
      let [x, y] = rottenQueue.shift();
      for (let [r, c] of directions) {
        let dr = x + r;
        let dc = y + c;
        if (
          dr >= 0 &&
          dr < rows &&
          dc >= 0 &&
          dc < columns &&
          grid[dr][dc] === 1
        ) {
          grid[dr][dc] = 2;
          rottenQueue.push([dr, dc]);
          freshOranges--;
          // isRottenInminute = true;
        }
      }
    }

    minutes++;
  }

  return freshOranges === 0 ? minutes : -1;
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);

// console.log(
//   orangesRotting([
//     [2, 0, 1, 0],
//     [1, 1, 2, 0],
//     [1, 1, 1, 1],
//     [0, 0, 2, 1],
//   ])
// );

// console.log(
//   orangesRotting([
//     [2, 1, 1],
//     [0, 1, 1],
//     [1, 0, 1],
//   ])
// );

// console.log(orangesRotting([[0, 2]]));
