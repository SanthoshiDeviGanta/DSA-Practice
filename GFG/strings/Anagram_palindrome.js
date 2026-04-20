function canFormPalindrome(s) {
  let sL = s.length;
  let sMap = new Map();
  for (let i = 0; i < sL; i++) {
    let count = sMap.get(s[i]) + 1 || 1;
    sMap.set(s[i], count);
  }

  //   console.log("sMap", sMap);

  let isOdd = s.length % 2 === 1;
  let oddCount = 0;

  //   console.log("isOdd", isOdd);

  for (let [key, value] of sMap) {
    // console.log("[key, value]", key, value);
    if (value % 2 == 1) {
      oddCount++;
    }
    if (isOdd && oddCount > 1) return false;
    if (!isOdd && oddCount == 1) return false;
  }

  return true;
}

console.log(canFormPalindrome("babab"));
console.log(canFormPalindrome("geeksogeeks"));
console.log(canFormPalindrome("geeksforgeeks"));
