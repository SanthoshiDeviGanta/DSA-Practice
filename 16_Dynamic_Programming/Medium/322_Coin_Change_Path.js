// console.log(coinChangeWithPath([1, 5, 7, 9], 46));
console.log(coinChangeWithPath([1, 2, 4, 7], 20));

function coinChangeWithPath(coins, amount) {
  let store = new Array(amount + 1).fill(Infinity);
  // parent[i] will store the coin used to reach amount i
  let parent = new Array(amount + 1).fill(-1);

  store[0] = 0;

  for (let coin of coins) {
    for (let j = coin; j <= amount; j++) {
      if (store[j - coin] + 1 < store[j]) {
        store[j] = store[j - coin] + 1;
        parent[j] = coin; // Track the coin used
      }
    }
    console.log("parent", parent);
    console.log("store", store);
  }

  if (store[amount] === Infinity) return [];

  // Reconstruct the path
  let result = [];
  let curr = amount;
  while (curr > 0) {
    result.push(parent[curr]);
    curr -= parent[curr];
  }
  return result;
}

// console.log(coinChangeWithPath([1, 2, 4, 5], 7)); // Output: [2, 5]
// console.log(coinChangeWithPath([186, 419, 83, 408], 6249));
