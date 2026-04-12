function countIncreasing(arr) {
  let count = 1;
  let finalCount = 0;
  let calCount = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      count++;
    } else {
      count = 1;
    }
    if (count != 1) {
      calCount = (count * (count - 1)) / 2;
    }
    if (count == 1 && calCount != 0) {
      finalCount = finalCount + calCount;
      calCount = 0;
    }
  }

  return finalCount + calCount;
}

// console.log(countIncreasing([1, 4, 5, 3, 7, 9]));
// console.log(countIncreasing([1, 3, 3, 2, 3, 5]));
// console.log(countIncreasing([2, 2, 2, 2]));
// console.log(countIncreasing([1, 4, 5, 7, 9, 12]));

console.log(countIncreasing([2, 1, 2, 2, 2]));

// 1 4 5
//  14 45 145

//  N * n-1 / 2

// 1 4 5 7 9 12

// 14 45 57 79 145 457 579 1457 4579 14579.  912 7912  57912 457912 1457912
