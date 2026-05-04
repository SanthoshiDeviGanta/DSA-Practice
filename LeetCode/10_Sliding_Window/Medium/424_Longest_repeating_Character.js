function isValidString(char, charMap, k) {
  let max = 0;
  let sum = 0;
  for (let value of charMap.values()) {
    max = Math.max(max, value);
    sum += value;
  }
  return sum - max <= k;
}

var characterReplacement = function (s, k) {
  let left = 0;
  let i = 0;
  let right = s.length;
  let max = 0;
  let charMap = new Map();

  while (left <= right) {
    if (isValidString(s[left], charMap, k)) {
      max = Math.max(max, left - i);
      charMap.set(s[left], charMap.get(s[left]) + 1 || 1);
      left++;
    } else {
      charMap.set(s[i], charMap.get(s[i]) - 1);
      i++;
    }
    console.log("charMap", charMap);
  }
  return max;
};

// console.log(characterReplacement("AABABBACABAABADAAA", 4));
console.log(characterReplacement("AABABBA", 1));
// console.log(characterReplacement("AABEAFAABEAFA", 2));
// console.log(characterReplacement("ABAB", 2));
