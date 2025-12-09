function isAplhaNum(ch) {
  return /[a-z0-9]/.test(ch);
}
function isPalindrome(s) {
  let left = 0,
    right = s.length - 1;

  s = s.toLowerCase();

  while (left < right) {
    while (left < right && !isAplhaNum(s[left])) {
      left++;
    }
    while (left < right && !s[right].match(/[a-z0-9]/i)) {
      right--;
    }
    console.log("s[left] !== s[right]", s[left], s[right]);

    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("A M MA"));

// function isPalindrome(s) {
//   let left = 0,
//     right = s.length - 1;

//   s = s.toLowerCase();

//   while (left < right) {
//     if (!isAplhaNum(s[left])) {
//       left++;
//     } else if (!isAplhaNum(s[right])) {
//       right--;
//     } else if (s[left] == s[right]) {
//       left++;
//       right--;
//     } else {
//       return false;
//     }
//     console.log("s[left] !== s[right]", s[left], s[right]);
//   }
//   return true;
// }

// function isAplhaNumASCII(ch) {
//   if (
//     (ch.charCodeAt() >= "a".charCodeAt() &&
//       ch.charCodeAt() <= "z".charCodeAt()) ||
//     (ch.charCodeAt() >= "0".charCodeAt() && ch.charCodeAt() <= "9".charCodeAt())
//   ) {
//     return true;
//   }
//   return false;
// }

// function isPalindrome(s) {
//   let left = 0,
//     right = s.length - 1;
//   s = s.toLowerCase();

//   while (left < right) {
//     if (!isAplhaNumASCII(s[left])) {
//       left++;
//       continue;
//     }
//     // console.log("s[left] !== s[right]", s[left], s[right]);
//     if (!isAplhaNumASCII(s[right])) {
//       right--;
//       continue;
//     }

//     if (s[left] !== s[right]) {
//       return false;
//     }

//     left++;
//     right--;
//   }

//   return true;
// }
// console.log(isPalindrome(".,"));

console.log(isPalindrome("A man, a plan, a canal: Panama"));
