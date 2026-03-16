// var wordBreak = function (s, wordDict) {
//   let memo = new Map();
//   let wordDictSet = new Set(wordDict);
//   console.log(wordDictSet);

//   let sL = s.length;

//   function checkWord(start) {
//     let ans = false;
//     if (start === sL) {
//       ans = true;
//     }
//     if (memo.has(s.substring(start, sL))) {
//       return memo.get(s.substring(start, sL));
//     }
//     for (let end = start + 1; end <= sL; end++) {
//       let word = s.substring(start, end);
//       console.log("word", word);
//       if (wordDictSet.has(word)) {
//         memo.set(word, true);
//         if (checkWord(end)) {
//           return true;
//         }
//         console.log("-----");
//       } else {
//         memo.set(word, false);
//       }
//     }

//     return ans;
//   }

//   return checkWord(0);
// };

// var wordBreak = function (s, wordDict) {
//   let memo = {};

//   function checkWord(remStr) {
//     if (remStr === "") return true;
//     console.log("memo", memo);
//     if (remStr in memo) return memo[remStr];

//     let res = false;
//     for (let i = 0; i < remStr.length; i++) {
//       let subStr = remStr.substring(0, i + 1);
//       console.log("subStr", subStr);
//       if (wordDict.includes(subStr) && checkWord(remStr.substring(i + 1))) {
//         res = true;
//       }
//     }

//     return (memo[remStr] = res);
//   }

//   return checkWord(s);
// };

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const n = s.length;

  // dp[i] represents if the prefix s.substring(0, i) can be segmented
  const dp = new Array(n + 1).fill(false);

  // Base case: an empty string can be "segmented"
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      // If the first part s[0...j] is valid AND the second part s[j...i] is in the dictionary
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break; // Found a valid split for index i, no need to check further j's
      }
    }
    console.log("dp", dp);
  }

  return dp[n];
};

// let s =
//   "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
// console.log(
//   wordBreak(s, [
//     "a",
//     "aa",
//     "aaa",
//     "aaaa",
//     "aaaaa",
//     "aaaaaa",
//     "aaaaaaa",
//     "aaaaaaaa",
//     "aaaaaaaaa",
//     "aaaaaaaaaa",
//   ]),
// );
console.log(wordBreak("applepenapple", ["apple", "pen"]));
// console.log(wordBreak("applepenappl", ["apple", "pen"]));
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
// console.log(wordBreak("abcd", ["a", "abc", "b", "cd"]));
