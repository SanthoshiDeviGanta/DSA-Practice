function needleHay(haystack, needle) {
  let lps = [0];
  let lpsPointer = 1;
  let needlePointer = 0;
  while (lpsPointer < needle.length) {
    if (needle[needlePointer] === needle[lpsPointer]) {
      lps[lpsPointer] = needlePointer + 1;
      lpsPointer++;
      needlePointer++;
    } else {
      if (needlePointer === 0) {
        lps[lpsPointer] = 0;
        lpsPointer++;
      } else {
        needlePointer = lps[needlePointer - 1];
      }
    }
  }
  console.log("lps", lps);

  let hayPointer = 0;
  needlePointer = 0;

  while (hayPointer < haystack.length) {
    if (haystack[hayPointer] === needle[needlePointer]) {
      hayPointer++;
      needlePointer++;
    } else {
      if (needlePointer === 0) {
        hayPointer++;
      } else {
        needlePointer = lps[needlePointer - 1];
      }
    }

    if (needlePointer === needle.length) {
      return hayPointer - needlePointer;
    }
  }

  return -1;
}
console.log(needleHay("mississippi", "issip"));
