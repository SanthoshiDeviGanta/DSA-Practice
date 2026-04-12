var permuteUnique = function (nums) {
  let result = [];

  nums.sort((a, b) => a - b);

  function backTrack(path, choices) {
    if (path.length === nums.length) {
      result.push([...path]);
    }

    for (let i = 0; i < choices.length; i++) {
      if (i > 0 && choices[i] === choices[i - 1]) {
        continue;
      }
      path.push(choices[i]);
      backTrack(path, [...choices.slice(0, i), ...choices.slice(i + 1)]);
      path.pop();
    }
  }

  backTrack([], nums);

  return result;
};

console.log(permuteUnique([1, 1, 2]));

// console.log(permuteUnique([1, 2, 3]));
