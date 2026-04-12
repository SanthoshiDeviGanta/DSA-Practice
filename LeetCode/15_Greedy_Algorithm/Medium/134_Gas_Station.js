var canCompleteCircuit = function (gas, cost) {
  let ans = 0;
  let currGain = 0;
  let totalGain = 0;

  for (let i = 0; i < gas.length; i++) {
    let gain = gas[i] - cost[i];
    currGain = currGain + gain;
    totalGain = totalGain + gain;

    if (currGain < 0) {
      currGain = 0;
      ans = i + 1;
    }
  }

  return totalGain < 0 ? -1 : ans;
};

console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2]));
