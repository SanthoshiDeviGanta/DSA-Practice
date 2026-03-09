var longestPalindrome = function (s) {
  let longest = [0, 0];
  let length = -1;

  for (let i = 0; i < s.length; i++) {
    let odd = expandAroundCenter(s, i, i);
    if (odd[1] - odd[0] > length) {
      length = odd[1] - odd[0];
      longest = odd;
    }

    let even = expandAroundCenter(s, i, i + 1);
    if (even[1] - even[0] > length) {
      length = even[1] - even[0];
      longest = even;
    }
  }
  return s.slice(longest[0], longest[1] + 1);
};

function expandAroundCenter(s, left, right) {
  let result = [0, 0];
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    result = [left, right];
    left--;
    right++;
  }
  return result;
}

// console.log(longestPalindrome("racecar"));
// console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("cccc"));

// console.log(
//   "returned 1",
//   returned[0],
//   returned[1],
//   s.slice(returned[0], returned[1] + 1),
// );

// console.log(
//   "returned 2",
//   returned[0],
//   returned[1],
//   s.slice(returned[0], returned[1] + 1),
// );
