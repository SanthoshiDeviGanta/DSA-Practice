// Recursion
var uniquePaths1 = function (m, n) {
  let dp = Array.from({ length: m }, () => new Array(n).fill(undefined));
  dp[0][0] = 1;

  function track(row, col) {
    if (row === 0 || col === 0) {
      return 1;
    }

    console.log("row, col", row, col);
    if (dp[row][col] !== undefined) {
      return dp[row][col];
    }

    let ways = track(row - 1, col) + track(row, col - 1);
    dp[row][col] = ways;
    return ways;
  }

  return track(m - 1, n - 1);
};

// Iteration
var uniquePaths = function (m, n) {
  let dp = Array.from({ length: m }, () => Array(n).fill(-1));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j == 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  console.log("dp", dp);

  return dp[m - 1][n - 1];
};

// console.log(uniquePaths(3, 7));
console.log(uniquePaths(51, 9));
