function characterReplacement(s, k) {
  let charMap = new Map();
  let left = 0;
  let currIdx = 0;
  let max = 0;

  while (currIdx <= s.length) {
    if (isValidWindow(charMap, k)) {
      charMap.set(s[currIdx], (charMap.get(s[currIdx]) || 0) + 1);
      max = Math.max(max, currIdx - left);
      currIdx++;
    } else {
      charMap.set(s[left], charMap.get(s[left]) - 1);
      left++;
    }
    // console.log("charMap", charMap, left, currIdx);
  }

  return max;
}

function isValidWindow(charMap, k) {
  let max = 0,
    sum = 0;

  for (let val of charMap.values()) {
    max = Math.max(max, val);
    sum += val;
  }

  return sum - max <= k;
}

console.log(characterReplacement("AABACAAD", 2));
