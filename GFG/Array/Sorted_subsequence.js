function find3Numbers(nums) {
  let nL = nums.length;
  if (nL < 3) return [];

  let small = Infinity;
  let mid = Infinity;
  let firstSmall = Infinity;

  for (let num of nums) {
    if (num < small) {
      small = num;
    } else if (num <= mid) {
      firstSmall = small;
      mid = num;
    } else {
      return [firstSmall, mid, num];
    }
  }

  return [];
}

console.log(find3Numbers([12, 11, 10, 5, 6, 2, 30]));
// console.log(find3Numbers([1, 2, 3, 4]));
