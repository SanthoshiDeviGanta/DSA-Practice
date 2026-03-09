// Brute force == substrings(o(n^2)) + palindrome O(n). ===> o(n^3)
// function isPalindrome(word) {
//   let wL = word.length;
//   //   console.log("word", word);

//   for (let i = 0, j = wL - 1; i < wL / 2; i++, j--) {
//     if (word[i] !== word[j]) {
//       return false;
//     }
//   }
//   return true;
// }

// var countSubstrings = function (s) {
//   let subPalindrome = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       subPalindrome += isPalindrome(s.slice(i, j)) === true ? 1 : 0;
//     }
//   }
//   return subPalindrome;
// };

//  -----------------------------------------------------------------------------------
//  -----------------------------------------------------------------------------------
// Dynamic Programming : Space o(n^2) Time O(n^2)
// var countSubstrings = function (s) {
//   let sL = s.length;
//   let table = Array.from({ length: sL }, () => new Array(sL).fill(null));
//   let count = 0;
//
//    //-----For 1 Length char-----
//   for (let i = 0; i < sL; i++) {
//     table[i][i] = true;
//     count++;
//  //-----For 2 Length char-----
//     if (i < sL - 1 && s[i] === s[i + 1]) {
//       table[i][i + 1] = true;
//       count++;
//     }
//   }

//    //-----For 3 to n Length char-----
//   for (let len = 3; len <= sL; len++) {
//     for (let i = 0; i <= sL - len; i++) {
//       let j = i + len - 1;
//       //   console.log("s", i, j, s.slice(i, j + 1));
//       if (s[i] === s[j] && table[i + 1][j - 1]) {
//         table[i][j] = true;
//         count++;
//       }
//     }
//   }

//   //   for (let i = 0; i < table.length; i++) {
//   //     console.log("i", i, JSON.stringify(table[i]));
//   //   }

//   return count;
// };

//  -----------------------------------------------------------------------------------
//  -----------------------------------------------------------------------------------

// Expand around center -- Space O(1) , Time O(n^2)

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var countSubstrings = function (s) {
//   let totalCount = 0;

//   for (let i = 0; i < s.length; i++) {
//     // Case 1: Odd length palindromes (center is at index i)
//     totalCount += expandAroundCenter(s, i, i);
//     // console.log("-----");
//     // Case 2: Even length palindromes (center is between i and i+1)
//     totalCount += expandAroundCenter(s, i, i + 1);
//     // console.log("---------------");
//   }

//   return totalCount;
// };

// function expandAroundCenter(s, left, right) {
//   //   console.log("s", s.slice(left, right + 1));

//   let count = 0;
//   // Expand as long as the pointers are in bounds and characters match
//   while (left >= 0 && right < s.length && s[left] === s[right]) {
//     // console.log("s --- ", s.slice(left, right + 1));
//     count++;
//     left--;
//     right++;
//     // console.log("s -- ", s.slice(left, right + 1));
//   }
//   return count;
// }

function countSubstrings(s) {
  let totalCount = 0;

  for (let i = 0; i < s.length; i++) {
    // Odd Index as center
    totalCount += expandAroundCenter(s, i, i);

    // Even index as center
    totalCount += expandAroundCenter(s, i, i + 1);
  }

  return totalCount;
}

function expandAroundCenter(s, left, right) {
  let count = 0;

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    count++;
    left--;
    right++;
  }

  return count;
}

// console.log(countSubstrings("caa"));
// console.log(countSubstrings("racecar"));
// console.log(countSubstrings("cabadabac"));
console.log(countSubstrings("amma"));
