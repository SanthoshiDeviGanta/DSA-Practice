var leastInterval = function (tasks, n) {
  let charArr = Array(26).fill(0);
  let maxFreq = 0;
  let count = 0;
  //   console.log(charArr);

  for (let i = 0; i < tasks.length; i++) {
    let curr = tasks[i].charCodeAt() - "A".charCodeAt();
    charArr[curr] = charArr[curr] + 1;
    maxFreq = Math.max(maxFreq, charArr[curr]);
  }

  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i] === maxFreq) {
      count++;
    }
  }

  let newArrLen = (maxFreq - 1) * (n + 1) + count;

  return Math.max(newArrLen, tasks.length);
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
