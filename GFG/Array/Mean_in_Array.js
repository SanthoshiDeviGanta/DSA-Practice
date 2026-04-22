class Solution {
  findMeanBrute(arr, queries) {
    // code here
    let final = [];

    for (let [s, e] of queries) {
      let sum = 0;
      for (let i = s; i <= e; i++) {
        sum += arr[i];
      }
      let mean = Math.floor(sum / (e + 1 - s));

      final.push(mean);
    }

    return final;
  }
  findMean(arr, queries) {
    let prefixSum = new Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
      prefixSum[i + 1] = prefixSum[i] + arr[i];
    }

    let final = [];

    for (let [s, e] of queries) {
      let finalSum = prefixSum[e + 1] - prefixSum[s];
      let mean = Math.floor(finalSum / (e + 1 - s));
      final.push(mean);
    }

    return final;
  }
}

let solution = new Solution();
let out = solution.findMean(
  [1, 2, 3, 4, 5],
  [
    [0, 2],
    [1, 3],
    [0, 4],
  ],
);
console.log("out", out);

let out1 = solution.findMean(
  [6, 7, 8, 10],
  [
    [0, 3],
    [1, 2],
  ],
);
console.log("out1", out1);
