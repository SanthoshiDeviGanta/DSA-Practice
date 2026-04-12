function maxWater(arr) {
  // code here
  let left = 0;
  let right = arr.length - 1;
  let maxWater = 0;
  while (left < right) {
    let area = Math.min(arr[left], arr[right]) * (right - left);
    maxWater = Math.max(maxWater, area);
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

console.log(maxWater([2, 1, 8, 6, 4, 6, 5, 5]));
console.log(maxWater([3, 1, 2, 4, 5]));
console.log(maxWater([1, 5, 4, 3]));
