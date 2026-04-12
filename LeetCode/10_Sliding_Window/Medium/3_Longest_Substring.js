var lengthOfLongestSubstring1 = function (s) {
  let i = 0;
  let j = 0;
  let maxCount = 0;
  let charMap = new Map();

  while (j < s.length) {
    if (!charMap.has(s[j])) {
      maxCount = Math.max(j - i + 1, maxCount);
      charMap.set(s[j], j);
      j++;
    } else {
      // here we are deleting map characters till the duplicate value which is not that efficient.
      charMap.delete(s[i]);
      i++;
    }
  }

  return maxCount;
};

var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let j = 0;
  let maxCount = 0;
  let charMap = new Map();

  while (j < s.length) {
    if (charMap.has(s[j]) && charMap.get(s[j]) >= i) {
      i = charMap.get(s[j]) + 1;
    }
    charMap.set(s[j], j);
    maxCount = Math.max(j - i + 1, maxCount);
    j++;
  }

  return maxCount;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("abeafhdijcbb"));
console.log(lengthOfLongestSubstring("tmmzux ab"));
