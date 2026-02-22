var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));

  let half = costs.length / 2;
  let sum = 0;

  for (let i = 0; i < half; i++) {
    sum = sum + costs[i][0] + costs[i + half][1];
  }

  return sum;
};

console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469],
  ]),
);
