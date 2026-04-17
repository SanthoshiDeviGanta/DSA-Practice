function checkPalindrome(num) {
  let n = num.length;
  for (let i = 0; i < Math.floor(n / 2); ++i) {
    if (num[i] !== num[n - 1 - i]) {
      return 0;
    }
  }
  return 1;
}

function nextPalindrome(num) {
  let n = num.length;

  while (true) {
    // Add 1 to the number (always do this first)
    let carry = 1;
    for (let i = n - 1; i >= 0; --i) {
      num[i] += carry;
      if (num[i] === 10) {
        num[i] = 0;
        carry = 1;
      } else {
        carry = 0;
        break;
      }
    }

    // If carry remains, insert 1 at beginning
    if (carry === 1) {
      num.unshift(1);
      n++;
    }

    // Check if palindrome
    if (checkPalindrome(num)) {
      break;
    }
  }

  return num;
}

// let num = [9, 4, 1, 8, 7, 9, 7, 8, 3, 2, 2];

// let res = nextPalindrome(num);

// console.log(res.join(" "));

console.log(nextPalindrome([2, 3, 5, 4]));

// 2354
// 2332
// 2442

console.log(nextPalindrome([2, 3, 5, 4, 5]));

// 23545
// 23532
// 23632

console.log(nextPalindrome([9, 4, 1, 8, 7, 9, 7, 8, 3, 2, 2]));

//  94187 9 78322
//  94187 9 78149
//  94188 0 88149
