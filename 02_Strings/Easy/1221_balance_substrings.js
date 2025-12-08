// var balancedStringSplit = function (s) {
//   let right = 0;
//   let left = 0;
//   let sub = 0;
//   for (let ch of s) {
//     if (ch === "R") {
//       right++;
//     } else {
//       left++;
//     }
//     if (right === left) {
//       sub++;
//       right = left = 0;
//     }
//   }

//   return sub;
// };

var balancedStringSplit = function (s) {
  let count = 0;
  let sub = 0;

  for (let ch of s) {
    if (ch === "R") {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      sub++;
    }
  }
  return sub;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("RLRRRLLRLL"));
console.log(balancedStringSplit("LLLLRRRR"));
