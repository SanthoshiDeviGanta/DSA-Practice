var partitionLabels = function (s) {
  let first = Array(26).fill(-1);
  let last = Array(26).fill(-1);

  let result = [];

  for (let i = 0; i < s.length; i++) {
    let charIdx = s[i].charCodeAt() - "a".charCodeAt();
    if (first[charIdx] === -1) {
      first[charIdx] = i;
    }
    last[charIdx] = i;
  }

  //   console.log("first", first);
  //   console.log("last", last);

  let partitionStart = 0,
    partitionEnd = 0;

  for (let i = 0; i < s.length; i++) {
    let charIdx = s[i].charCodeAt() - "a".charCodeAt();

    partitionEnd = Math.max(partitionEnd, last[charIdx]);

    if (i === partitionEnd) {
      result.push(partitionEnd - partitionStart + 1);
      partitionStart = partitionEnd = i + 1;
    }
  }

  return result;
};

var partitionLabels1 = function (s) {
  let charMap = new Map();

  //   Creating the array fr last Index of char
  for (let i = 0; i < s.length; i++) {
    charMap.set(s[i], i);
  }

  //   console.log("charMap", charMap);

  //   creating the ans
  let result = [];
  let end = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, charMap.get(s[i]));

    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
console.log(partitionLabels("eccbbbbdec"));
