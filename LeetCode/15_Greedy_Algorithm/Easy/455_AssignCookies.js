var findContentChildren = function (child, cookie) {
  child.sort((a, b) => a - b);
  cookie.sort((a, b) => a - b);

  console.log("child", child);
  console.log("cookie", cookie);

  let cookieIdx = 0;
  let childIdx = 0;
  let count = 0;

  while (childIdx < child.length && cookieIdx < cookie.length) {
    if (cookie[cookieIdx] >= child[childIdx]) {
      count++;
      childIdx++;
    }
    cookieIdx++;
  }

  return count;
};

console.log(findContentChildren([5, 6, 10, 11], [12, 9, 8, 6, 7]));
