// Much more optimal solution (Binary search)
function longestCommonPrefix(strs) {
  let minLen = Math.min(...strs.map((str) => str.length));
  let low = 0,
    high = minLen;

  const checkPrefix = (len) => {
    let prefix = strs[0].slice(0, len);
    return strs.every((str) => str.startsWith(prefix));
  };

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (checkPrefix(mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return strs[0].slice(0, high);
}

// More optimal time complexity solution
//  Sort -- nlogn +  o(m)[for while loop only till length of first string or even less] === o(nlogn+m)
// function longestCommonPrefix(strs) {
//   strs.sort();

//   let first = strs[0];
//   let last = strs[strs.length - 1];
//   let i = 0;

//   while (i < first.length && first[i] === last[i]) {
//     i++;
//   }

//   return first.slice(0, i);
// }

// Time : O(n × m) Space : O(1)
// function longestCommonPrefix(strs) {
//   for (let i = 0; i < strs[0].length; i++) {
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[0][i] !== strs[j][i]) {
//         return strs[0].slice(0, i);
//       }
//     }
//   }

//   return strs[0];
// }

// Creates string everytime for prefix addition.
// var longestCommonPrefix = function (strs) {
//     if (strs.length === 1) {
//         return strs[0];
//     }
//     let prefix = "";
//     for (let i = 0; i < strs[0].length; i++) {
//         for (let j = 1; j < strs.length; j++) {
//             if (strs[0][i] !== strs[j][i]) {
//                 return prefix;
//             }
//         }
//         prefix = prefix + strs[0][i];
//     }

//     return prefix;
// };

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["", "a"]));
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
console.log(longestCommonPrefix(["flower", "flow", "flowht"]));
