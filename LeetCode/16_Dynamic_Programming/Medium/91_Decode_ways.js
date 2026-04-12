//  Recursion -- Top Down

// var numDecodings = function (s) {
//   let memo = {};

//   function decode(remS) {
//     if (remS === "") return 1;

//     if (remS in memo) return memo[remS];

//     let rL = remS.length;
//     let ans = 0;
//     let oneDigit = remS.substring(rL - 1);
//     let twoDigit = remS.substring(rL - 2);

//     if (oneDigit != 0) {
//       ans += decode(remS.substring(0, rL - 1));
//     }

//     if (twoDigit >= 10 && twoDigit <= 26) {
//       ans += decode(remS.substring(0, rL - 2));
//     }

//     memo[remS] = ans;
//     // console.log("memo", memo);
//     return ans;
//   }
//   return decode(s);
// };

// Iteration -- Bottom Up

var numDecodings = function (s) {
  if (s[0] == "0") return 0;
  let sL = s.length;
  let dp = new Array(sL + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= sL; i++) {
    // For One
    const oneDigit = s.substring(i - 1, i);
    console.log("oneDigit", oneDigit);

    if (oneDigit >= 1 && oneDigit <= 9) {
      dp[i] += dp[i - 1];
    }
    console.log("dp 1111", dp);

    // For Two
    const twoDigit = s.substring(i - 2, i);
    console.log("twoDigit", twoDigit);
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] += dp[i - 2];
    }

    console.log("dp 2222", dp);
    console.log("----------------------------");
  }

  return dp[sL];
};

// console.log(numDecodings("06"));
// console.log(numDecodings("1325"));
console.log(numDecodings("132541"));

// console.log(numDecodings("1325412"));
// console.log(numDecodings("12"));
// console.log(numDecodings("226"));
