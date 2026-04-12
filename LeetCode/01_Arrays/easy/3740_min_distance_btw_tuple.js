var minimumDistance1 = function (nums) {
  let numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) {
      let idxArr = numsMap.get(nums[i]);
      idxArr.push(i);
      numsMap.set(nums[i], idxArr);
    } else {
      numsMap.set(nums[i], [i]);
    }
  }

  console.log(numsMap);
  let minDist = +Infinity;

  for (let idxs of numsMap.values()) {
    if (idxs.length >= 3) {
      for (let i = 0; i <= idxs.length - 3; i++) {
        let sum =
          Math.abs(idxs[i] - idxs[i + 1]) +
          Math.abs(idxs[i + 1] - idxs[i + 2]) +
          Math.abs(idxs[i + 2] - idxs[i]);

        minDist = Math.min(minDist, sum);
      }
    }
  }

  return minDist != Infinity ? minDist : -1;
};

var minimumDistance = function (nums) {
  let numsMap = new Map();
  let minDist = +Infinity;

  for (let x = 0; x < nums.length; x++) {
    let idxArr = numsMap.get(nums[x]) || [];
    idxArr.push(x);
    numsMap.set(nums[x], idxArr);

    if (idxArr.length < 3) {
      continue;
    }

    let i = idxArr[idxArr.length - 3];
    let j = idxArr[idxArr.length - 2];
    let k = idxArr[idxArr.length - 1];
    let sum = Math.abs(i - j) + Math.abs(j - k) + Math.abs(k - i);
    minDist = Math.min(minDist, sum);
  }

  return minDist != Infinity ? minDist : -1;
};

// console.log(minimumDistance([1, 2, 1, 1, 3]));
// console.log(minimumDistance([1, 1, 2, 3, 2, 1, 2]));

// console.log(minimumDistance([1, 1, 1, 1]));
console.log(minimumDistance([5, 3, 5, 5, 5]));
