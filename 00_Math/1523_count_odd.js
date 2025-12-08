var countOdds = function (low, high) {
  let range = high - low;

  if (low % 2 === 0 && high % 2 === 0) {
    return Math.floor(range / 2);
  }
  return Math.floor(range / 2) + 1;
};

console.log(countOdds(21, 22));
