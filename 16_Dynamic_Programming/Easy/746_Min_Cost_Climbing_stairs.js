var minCostClimbingStairs = function (cost) {
  let store = new Map();

  function minCost(costLen) {
    if (costLen == 0 || costLen == 1) {
      return 0;
    }

    if (store.has(costLen)) {
      return store.get(costLen);
    }

    let minCostValue = Math.min(
      minCost(costLen - 1) + cost[costLen - 1],
      minCost(costLen - 2) + cost[costLen - 2],
    );
    store.set(costLen, minCostValue);

    return minCostValue;
  }

  return minCost(cost.length);
};

// var minCostClimbingStairs = function (cost) {
//   let store = [0, 0];

//   for (let i = 2; i <= cost.length; i++) {
//     store[i] = Math.min(store[i - 1] + cost[i - 1], store[i - 2] + cost[i - 2]);
//   }
//   //   console.log("store", store);

//   return store[cost.length];
// };

//                                 0.  1.  2. 3  4   5.  6. 7.  8.  9
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs([10, 15, 20]));

console.log(
  minCostClimbingStairs([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0,
  ]),
);
