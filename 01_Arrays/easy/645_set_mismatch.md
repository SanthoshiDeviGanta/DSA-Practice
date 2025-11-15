# [Leetcode 645: Set Mismatch](https://leetcode.com/problems/set-mismatch/description/)

## Approaches

1. [Using Math Formula](#)
2. [Using HashSet(Simple)](#)
3. [Using Array as Counter (In - place O(1) extra space)](#)

### Approach 1: Using Math Formula (Efficient)

Idea:

We know that for numbers 1 to n:

Sum = n(n+1)/2

Sum of squares = n(n+1)(2n+1)/6

If we compare these to actual sums from the array,
we can find the duplicate and missing numbers.

```javascript
var findErrorNums = function (nums) {
  const n = nums.length;
  let S1 = (n * (n + 1)) / 2;
  let S2 = (n * (n + 1) * (2 * n + 1)) / 6;

  let s1 = 0,
    s2 = 0;
  for (let num of nums) {
    s1 += num;
    s2 += num * num;
  }

  let diff1 = S1 - s1; // missing - duplicate
  let diff2 = S2 - s2; // missing² - duplicate²

  let sum_md = diff2 / diff1; // missing + duplicate

  let missing = (diff1 + sum_md) / 2;
  let duplicate = missing - diff1;

  return [duplicate, missing];
};
```

### Approach 2: Using HashSet(Simple)

Idea:

Use a set to track seen numbers.

If you see a number again → it’s duplicate.

Then compute missing using expected sum.

```javascript
var findErrorNums = function (nums) {
  let seen = new Set();
  let duplicate = -1;
  let n = nums.length;
  let total = (n * (n + 1)) / 2;
  let actual = 0;

  for (let num of nums) {
    if (seen.has(num)) duplicate = num;
    seen.add(num);
    actual += num;
  }

  let missing = total - (actual - duplicate);
  return [duplicate, missing];
};
```

✅ Time Complexity: O(n)
✅ Space Complexity: O(n)

### Approach 3: Using Array as Counter (In - place O(1) extra space)

Modify array signs to mark presence:

```javascript
var findErrorNums = function (nums) {
  let duplicate, missing;
  for (let num of nums) {
    let idx = Math.abs(num) - 1;
    if (nums[idx] < 0) duplicate = Math.abs(num);
    else nums[idx] *= -1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) missing = i + 1;
  }
  return [duplicate, missing];
};
```

```javascript
let nums = [1, 3, 3, 4]; // [3,2]
// let nums= [1,1]// [1,2]
// let nums = [2,2] // [2,1]
console.log(findErrorNums(nums));
```

✅ Time Complexity: O(n)
✅ Space Complexity: O(1)

| Approach           | Idea                    | Time | Space | Notes                    |
| ------------------ | ----------------------- | ---- | ----- | ------------------------ |
| Math (Sum/Squares) | Uses formula difference | O(n) | O(1)  | Elegant & precise        |
| HashSet            | Track seen numbers      | O(n) | O(n)  | Simple, easy to remember |
| In-place           | Mark visited indices    | O(n) | O(1)  | Best for interviews      |
