// function numJewelsInStones(jewels, stones) {
//   let count = 0;
//   for (let i = 0; i < stones.length; i++) {
//     if (jewels.includes(stones[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// Time : o(n*m)

function numJewelsInStones(jewels, stones) {
  let count = 0;
  let set = new Set(jewels);
  console.log(set);

  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) {
      count++;
    }
  }

  return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
