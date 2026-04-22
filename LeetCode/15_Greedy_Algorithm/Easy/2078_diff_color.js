var maxDistance = function (colors) {
  let left = 0;
  let right = colors.length - 1;
  let maxDis = -Infinity;
  while (left < right) {
    if (colors[left] !== colors[right]) {
      maxDis = Math.max(maxDis, right);
    }
    right--;
  }
  left = 0;
  right = colors.length - 1;
  while (left < right) {
    if (colors[left] !== colors[right]) {
      maxDis = Math.max(maxDis, right - left);
    }
    left++;
  }

  return maxDis;
};

console.log(maxDistance([4, 4, 4, 11, 4, 4, 11, 4, 4, 4, 4, 4]));

// console.log(maxDistance([1, 1, 1, 6, 1, 1, 1]));
// console.log(maxDistance([1, 8, 3, 8, 3]));
