var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  // console.log("intervals", intervals);

  let endTime = intervals[1];
  let i = 1;
  let removeCount = 0;

  while (i < intervals.length) {
    if (intervals[i][0] < endTime) {
      removeCount++;
    } else {
      endTime = intervals[i][1];
    }

    i++;
  }

  return removeCount;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]),
);

console.log(
  eraseOverlapIntervals([
    [
      [1, 2],
      [2, 3],
    ],
  ]),
);

console.log(
  eraseOverlapIntervals([
    [
      [1, 2],
      [1, 2],
      [1, 2],
    ],
  ]),
);
