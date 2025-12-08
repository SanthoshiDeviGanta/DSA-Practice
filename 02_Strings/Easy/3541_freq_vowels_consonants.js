// Prob with consoles
// function maxFreqSum(s) {
//   let vowelMap = new Map();
//   let consMap = new Map();
//   let vowelCount = 0;
//   let consCount = 0;
//   for (let ch of "aeiou") {
//     vowelMap.set(ch, 0);
//   }
//   //   console.log("vowelMap 1", vowelMap);

//   for (let ch of s) {
//     // console.log("ch", ch);

//     if (vowelMap.has(ch)) {
//       let currentCount = vowelMap.get(ch) + 1;
//       vowelMap.set(ch, currentCount);
//       //   vowelCount = currentCount >= vowelCount ? currentCount : vowelCount;
//       vowelCount = Math.max(vowelCount, currentCount);
//     } else {
//       let currentCount = (consMap.get(ch) || 0) + 1;
//       consMap.set(ch, currentCount);
//       // consCount = currentCount >= consCount ? currentCount : consCount;
//       consCount = Math.max(currentCount, consCount);
//     }
//   }
//   console.log("vowelMap", vowelMap);
//   console.log("vowelCount", vowelCount);
//   console.log("-------");
//   console.log("consMap", consMap);
//   console.log("consCount", consCount);

//   return vowelCount + consCount;
// }
// ----------------------------------------------------
// Logic Simplified
// function maxFreqSum(s) {
//   let vowelMap = new Map();
//   let consMap = new Map();
//   let vowelCount = 0;
//   let consCount = 0;
//   for (let ch of "aeiou") {
//     vowelMap.set(ch, 0);
//   }

//   for (let ch of s) {
//     if (vowelMap.has(ch)) {
//       let currentCount = vowelMap.get(ch) + 1;
//       vowelMap.set(ch, currentCount);
//       vowelCount = Math.max(vowelCount, currentCount);
//     } else {
//       let currentCount = (consMap.get(ch) || 0) + 1;
//       consMap.set(ch, currentCount);
//       consCount = Math.max(currentCount, consCount);
//     }
//   }

//   return vowelCount + consCount;
// }

function maxFreqSum(s) {
  let vowelSet = new Set("aeiou");
  let sMap = new Map();

  let vowelCount = 0;
  let consCount = 0;

  for (let ch of s) {
    let count = (sMap.get(ch) || 0) + 1;
    sMap.set(ch, count);

    if (vowelSet.has(ch)) {
      vowelCount = Math.max(vowelCount, count);
    } else {
      consCount = Math.max(consCount, count);
    }
  }
  console.log("sMap", sMap);

  return vowelCount + consCount;
}
console.log(maxFreqSum("successes"));
// console.log(maxFreqSum("bx"));
// console.log(maxFreqSum("pps"));
