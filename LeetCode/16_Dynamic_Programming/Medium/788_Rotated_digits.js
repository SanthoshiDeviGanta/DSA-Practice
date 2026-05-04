function rotatedDigits(n) {
  let dp = Array(n + 1).fill(0);
  let count = 0;

  for (let i = 0; i <= n; i++) {
    if (n < 10) {
      if (i === 2 || i == 5 || i == 6 || i === 9) {
        dp[i] = 1;
        count++;
      }
      if (i === 3 || i == 4 || i === 7) {
        dp[i] = -1;
      }
    } else {
      let rem = n % 10;
      let quo = n / 10;

      if (dp[rem] == -1 || dp[quo] === -1) {
        dp[i] = -1;
      } else if (dp[rem] == 0 && dp[quo] === 0) {
        dp[i] = 0;
      } else {
        dp[i] = 1;
        count++;
      }
    }
  }

  return count;
}

console.log(rotatedDigits(25));
