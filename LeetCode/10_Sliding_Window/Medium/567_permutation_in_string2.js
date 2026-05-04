/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let s1Map = new Map();

  let currIdx = 0;
  let left = 0;

  for (let i = 0; i < s1.length; i++) {
    s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
  }

  let s1keys = s1Map.keys();

  console.log(s1keys);

  while (currIdx < s2.length) {
    if (s1keys.has(s2[currIdx])) {
      let start = currIdx;

      while (start < s2.length) {}
    } else {
      currIdx++;
    }
  }
};

console.log(checkInclusion("abcd", "efbamadcb"));
