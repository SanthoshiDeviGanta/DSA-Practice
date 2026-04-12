// console.log(coinChangeWithPath([1, 5, 7, 9], 46));
console.log(coinChangeWithPath([1, 2, 4, 7], 20));

function coinChangeWithPath(coins, amount) {
  let coinsReq = new Array(amount + 1).fill(Infinity);
  // maxCoin[i] will store the coin used to reach amount i
  let maxCoin = new Array(amount + 1).fill(-1);

  coinsReq[0] = 0;

  for (let coin of coins) {
    for (let j = coin; j <= amount; j++) {
      if (coinsReq[j - coin] + 1 < coinsReq[j]) {
        coinsReq[j] = coinsReq[j - coin] + 1;
        maxCoin[j] = coin; // Track the coin used
      }
    }
    console.log("maxCoin", maxCoin);
    console.log("coinsReq", coinsReq);
  }

  if (coinsReq[amount] === Infinity) return [];

  // Reconstruct the path
  let result = [];
  let curr = amount;
  while (curr > 0) {
    result.push(maxCoin[curr]);
    curr -= maxCoin[curr];
  }
  return result;
}

// console.log(coinChangeWithPath([1, 2, 4, 5], 7)); // Output: [2, 5]
// console.log(coinChangeWithPath([186, 419, 83, 408], 6249));
