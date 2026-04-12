function needleHay1(hay, needle) {
  return hay.indexOf(needle);
}

function needleHay2(hay, needle) {
  for (let i = 0; i < hay.length - needle.length; i++) {
    let slicedHay = hay.slice(i, i + needle.length);
    if (slicedHay === needle) {
      return i;
    }
  }
  return -1;
}

function needleHay3(hay, needle) {
  for (let i = 0; i < hay.length - needle.length; i++) {
    let x = 0;
    while (x < needle.length) {
      if (needle[x] === hay[i + x]) {
        x++;
      } else {
        break;
      }
    }
    if (x === needle.length) {
      return i;
    }
  }
  return -1;
}

function needleHay(hay, needle) {
  for (let i = 0; i < hay.length - needle.length; i++) {
    let x = 0;
    while (x < needle.length && needle[x] === hay[i + x]) {
      x++;
    }
    if (x === needle.length) {
      return i;
    }
  }
  return -1;
}

// console.log(needleHay("sadbutsad", "sad"));
// console.log(needleHay("sadbutsad", "b"));
// console.log(needleHay("leetcode", "leeto"));
console.log(needleHay("mississippi", "issip"));
