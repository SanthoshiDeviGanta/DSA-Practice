class Solution {
  commonElements(arr1, arr2, arr3) {
    // code here
    let i = 0,
      j = 0,
      k = 0;
    const result = [];

    while (i < arr1.length && j < arr2.length && k < arr3.length) {
      const a = arr1[i];
      const b = arr2[j];
      const c = arr3[k];

      // If all three are equal, it's a common element
      if (a === b && b === c) {
        result.push(a);

        // Move all three pointers forward
        i++;
        j++;
        k++;

        // Optional: skip duplicates if arrays can have duplicates
        while (i < arr1.length && arr1[i] === arr1[i - 1]) i++;
        while (j < arr2.length && arr2[j] === arr2[j - 1]) j++;
        while (k < arr3.length && arr3[k] === arr3[k - 1]) k++;
      } else {
        // Move the pointer with the smallest value
        if (a <= b && a <= c) {
          i++;
        } else if (b <= a && b <= c) {
          j++;
        } else {
          k++;
        }
      }
    }

    return result;
  }
}

let sol = new Solution();

console.log(
  sol.commonElements(
    [1, 5, 10, 20, 40, 80],
    [6, 7, 20, 80, 100],
    [3, 4, 15, 20, 30, 70, 80, 120],
  ),
);
