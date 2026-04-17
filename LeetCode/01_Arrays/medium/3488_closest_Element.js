var solveQueries = function (nums, queries) {
  let numsMap = new Map();
  let final = [];

  for (let i = 0; i < nums.length; i++) {
    let list = numsMap.get(nums[i]) || [];
    list.push(i);
    numsMap.set(nums[i], list);
  }

  console.log(numsMap);

  for (let i = 0; i < queries.length; i++) {
    let num = nums[queries[i]];
    console.log("num --- ", num);
    console.log(
      "----------------------------------------------------------------------------",
    );
    if (numsMap.has(num) && numsMap.get(num).length > 1) {
      let indicesList = numsMap.get(num);
      console.log("indicesList", queries[i], indicesList);
      let minDist = Infinity;
      for (let j = 0; j < indicesList.length; j++) {
        if (indicesList[j] == queries[i]) {
          let ld =
            j - 1 >= 0
              ? indicesList[j] - indicesList[j - 1]
              : nums.length -
                indicesList[indicesList.length - 1] +
                indicesList[j];
          let rd =
            j + 1 < indicesList.length
              ? indicesList[j + 1] - indicesList[j]
              : nums.length - indicesList[j] + indicesList[0];
          minDist = Math.min(minDist, ld, rd);
          console.log("minDist", minDist);
          console.log("-------------------");
        }
      }
      console.log("---minDist", minDist);
      minDist == Infinity ? final.push(-1) : final.push(minDist);
    } else {
      final.push(-1);
    }
  }

  return final;
};
// [2,-1,3]
// console.log(solveQueries([1, 3, 1, 4, 1, 3, 2], [0, 3, 5]));
//                        0.  1. 2. 3. 4. 5. 6.

console.log(solveQueries([6, 12, 17, 9, 16, 7, 6], [5, 6, 0, 4]));
// [-1,1,1,-1]
