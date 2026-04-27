var distance1 = function (nums) {
  let numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let values = numMap.get(nums[i]) || [];
    values.push(i);
    numMap.set(nums[i], values);
  }
  console.log(numMap);
  let final = [];
  for (let i = 0; i < nums.length; i++) {
    let values = numMap.get(nums[i]);
    let sum = 0;
    for (let j = 0; j < values.length; j++) {
      sum += Math.abs(i - values[j]);
    }
    final.push(sum);
  }

  return final;
};

var distance = function (nums) {
  let numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let values = numsMap.get(nums[i]) || [];
    values.push(i);
    numsMap.set(nums[i], values);
  }

  let ans = new Array(nums.length).fill(0);

  for (const [value, idxArr] of numsMap.entries()) {
    // console.log(" value, idxArr", value, idxArr);

    const idxL = idxArr.length;
    if (idxL === 1) continue;

    const prefixArray = new Array(idxL).fill(0);
    prefixArray[0] = idxArr[0];
    for (let i = 1; i < idxL; i++) {
      prefixArray[i] = prefixArray[i - 1] + idxArr[i];
    }
    // console.log("prefixArray", prefixArray);
    const totalSum = prefixArray[idxL - 1];

    for (let i = 0; i < idxL; i++) {
      const currIdx = idxArr[i];

      // left side
      let left = 0;
      if (i > 0) {
        left = i * currIdx - prefixArray[i - 1];
      }

      let right = 0;
      if (i < idxL - 1) {
        const cntRight = idxL - i - 1;
        right = totalSum - prefixArray[i] - cntRight * currIdx;
      }

      ans[currIdx] = left + right;
    }
  }

  return ans;
};

console.log(distance([1, 3, 1, 3, 1, 2, 1, 3]));
// console.log(distance([0, 5, 3]));
