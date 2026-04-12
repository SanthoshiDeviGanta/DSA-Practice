/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  // 1. Direction vectors: North, East, South, West
  const directions = [
    [0, 1], // North
    [1, 0], // East
    [0, -1], // South
    [-1, 0], // West
  ];

  // 2. Store obstacles in a Set for O(1) lookups
  // We store them as a string "x,y"
  const obstacleSet = new Set();
  for (const [ox, oy] of obstacles) {
    obstacleSet.add(`${ox},${oy}`);
  }
  console.log("obstacleSet", obstacleSet);

  let x = 0,
    y = 0;
  let dirIdx = 0; // Start facing North
  let maxDistSq = 0;

  for (const cmd of commands) {
    if (cmd === -1) {
      // Turn right 90 degrees
      dirIdx = (dirIdx + 1) % 4;
    } else if (cmd === -2) {
      // Turn left 90 degrees
      dirIdx = (dirIdx + 3) % 4;
    } else {
      // Move forward cmd steps
      const [dx, dy] = directions[dirIdx];

      for (let i = 0; i < cmd; i++) {
        const nextX = x + dx;
        const nextY = y + dy;

        // Check if the next position is an obstacle
        if (obstacleSet.has(`${nextX},${nextY}`)) {
          break; // Stop moving in this direction
        }

        x = nextX;
        y = nextY;

        // Update max distance squared seen so far
        maxDistSq = Math.max(maxDistSq, x ** 2 + y ** 2);
      }
    }
  }

  return maxDistSq;
};

// console.log(robotSim([4, -1, -1, 6, -2, -2, 7], [])); //25

console.log(
  robotSim(
    [4, -1, 6, -2, 5, -2, 7],
    [
      [3, 4],
      [4, 7],
    ],
  ),
);

// console.log(robotSim([4, -1, 3], []));

// console.log(robotSim([4, -1, 4, -2, 4], [[2, 4]]));
// console.log(robotSim([6, -1, -1, 6], [[0, 0]]));

// console.log(robotSim([4, -1, 6, -2, 5, -2, 7], []));

// console.log(
//   robotSim(
//     [4, -1, 6, -2, 5, -2, 7],
//     [
//       [3, 4],
//       [4, 7],
//     ],
//   ),
// );

// console.log(robotSim([4, -1, 6, -2, -2, 7], []));

console.log(robotSim([4, -1, -1, 6, -2, -2, 7], [])); //25

// console.log(robotSim([7, -2, -2, 7, 5], []));
// console.log(robotSim([7, -2, 11, -2, 7, 5], []));
// console.log(robotSim([7, -2, -2, 7, 5], []));
