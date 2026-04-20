// function maxOnes(arr) {
//   const n = arr.length;

//   // 1. Count existing 1s
//   let baseOnes = 0;
//   for (let x of arr) {
//     if (x === 1) baseOnes++;
//   }

//   // 2. Kadane's algorithm on transformed array:
//   //    0 -> +1, 1 -> -1
//   let maxGain = -Infinity;
//   let currentGain = 0;

//   for (let i = 0; i < n; i++) {
//     const val = arr[i] === 0 ? 1 : -1;

//     currentGain = Math.max(val, currentGain + val);
//     maxGain = Math.max(maxGain, currentGain);
//   }

//   // 3. If best gain is negative, don't flip
//   if (maxGain < 0) maxGain = 0;

//   // 4. Result = base 1s + best gain from flipping
//   return baseOnes + maxGain;
// }

function maxOnes(nums) {
  let initialOnes = 0;
  let maxGain = -Infinity;
  let currentGain = 0;

  for (let num of nums) {
    if (num) {
      initialOnes++;
    }
    const val = num === 0 ? 1 : -1;
    currentGain = Math.max(val, currentGain + val);
    maxGain = Math.max(maxGain, currentGain);
  }

  if (maxGain < 0) maxGain = 0;

  return initialOnes + maxGain;
}

// console.log(maxOnes([1, 0, 0, 1, 0, 0, 1]));

console.log(maxOnes([1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1]));
