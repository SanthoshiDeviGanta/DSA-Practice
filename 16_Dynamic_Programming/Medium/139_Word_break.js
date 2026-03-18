// var wordBreak = function (s, wordDict) {
//   let memo = new Map();
//   let sL = s.length;

//   function checkWord(start) {
//     let ans = false;
//     console.log("memo", memo);

//     if (start === sL) {
//       ans = true;
//     }
//     if (memo.has(s.substring(start, sL))) {
//       return memo.get(s.substring(start, sL));
//     }
//     for (let end = start + 1; end <= sL; end++) {
//       let word = s.substring(start, end);
//       console.log("word", word);
//       if (wordDict.includes(word)) {
//         memo.set(word, true);
//         if (checkWord(end)) {
//           return true;
//         }
//         console.log("-----");
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

//     for (let i = 0; i < remStr.length; i++) {
//       let subStr = remStr.substring(0, i + 1);
//       console.log("subStr", subStr);
//       if (wordDict.includes(subStr) && checkWord(remStr.substring(i + 1))) {
//         memo[remStr] = true;
//         return true;
//       }
//     }
//     memo[remStr] = false;
//     return false;
//   }

//   return checkWord(s);
// };

var wordBreak = function (s, wordDict) {
  let memo = new Map();
  const wordsDict = new Set(wordDict);

  function checkWord(remStr) {
    if (remStr === "") return true;
    console.log("memo", memo);
    if (memo.has(remStr)) return memo.get(remStr);
    if (wordsDict.has(remStr)) return true;

    for (let i = 0; i < remStr.length; i++) {
      let subStr = remStr.substring(0, i + 1);
      console.log("subStr", subStr);
      if (wordsDict.has(subStr) && checkWord(remStr.substring(i + 1))) {
        memo.set(remStr, true);
        return true;
      }
    }
    memo.set(remStr, false);
    return false;
  }

  return checkWord(s);
};

// var wordBreak = function (s, wordDict) {
//   const words = new Set(wordDict);
//   const memo = new Map(); // Store results for starting indices

//   function canBreak(start) {
//     console.log("memo", memo);
//     // Base case: we reached the end of the string
//     if (start === s.length) return true;

//     // Return cached result if we've seen this index before
//     if (memo.has(start)) return memo.get(start);

//     for (let end = start + 1; end <= s.length; end++) {
//       const sub = s.substring(start, end);
//       console.log("sub", sub);

//       // If prefix is in dict AND suffix can be broken
//       if (words.has(sub) && canBreak(end)) {
//         memo.set(start, true);
//         return true;
//       }
//     }

//     memo.set(start, false);
//     return false;
//   }
//   return canBreak(0);
// };

// console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("applepenappl", ["apple", "pen"]));
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
// console.log(wordBreak("abcd", ["a", "abc", "b", "cd"]));

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
