var closestTarget = function (words, target, sI) {
  let wL = words.length;
  let minIdx = +Infinity;

  for (let i = 0; i < wL; i++) {
    if (words[i] === target) {
      let leftD = (sI - i + wL) % wL;
      let rightD = (i - sI + wL) % wL;

      console.log(leftD, rightD);

      minIdx = Math.min(minIdx, leftD, rightD);
    }
  }

  return minIdx != Infinity ? minIdx : -1;
};

console.log(
  closestTarget(["hello", "i", "am", "leetcode", "hello"], "hello", 1),
);

// console.log(closestTarget(["a", "b", "leetcode"], "leetcode", 0));
