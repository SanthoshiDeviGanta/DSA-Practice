function reverseNum(num) {
  let out = 0;
  while (num > 0) {
    let rem = num % 10;
    out = out * 10 + rem;
    num = Math.floor(num / 10);
  }

  return out;
}
var minMirrorPairDistance = function (nums) {
  let numsMap = new Map();
  let minDist = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (numsMap.has(num)) {
      let sIdx = numsMap.get(num);
      minDist = Math.min(minDist, Math.abs(sIdx - i));
    }
    let revNum = reverseNum(num);
    numsMap.set(revNum, i);
  }
  console.log("numsMap", numsMap);

  return minDist != Infinity ? minDist : -1;
};

// console.log(minMirrorPairDistance([12, 21, 45, 33, 54]));
// console.log(minMirrorPairDistance([120, 21]));
// console.log(minMirrorPairDistance([21, 120]));
// console.log(minMirrorPairDistance([12, 34, 46, 21, 12]));

console.log(minMirrorPairDistance([34, 12, 46, 21, 73, 87, 88, 12]));
