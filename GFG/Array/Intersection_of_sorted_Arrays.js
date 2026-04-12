// function intersection(a, b) {
//   let numsSet = new Set(a);
//   let interSet = new Set();

//   for (let num of b) {
//     if (numsSet.has(num)) {
//       interSet.add(num);
//     }
//   }

//   return [...interSet];
// }

function intersection(a, b) {
  let common = [];
  let numsSet = new Set(a);
  for (let i = 1; i <= b.length; i++) {
    if (b[i - 1] === b[i]) {
      continue;
    } else {
      if (numsSet.has(b[i - 1])) {
        common.push(b[i - 1]);
      }
    }
  }

  return common;
}

console.log(intersection([1, 1, 2, 2, 2, 4], [2, 2, 4, 4]));
console.log(intersection([1, 2], [3, 4]));
console.log(intersection([1, 2, 3], [1, 2, 3]));
