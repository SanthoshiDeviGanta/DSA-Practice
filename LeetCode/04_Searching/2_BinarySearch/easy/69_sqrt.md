# [Leetcode 69: squareRoot](https://leetcode.com/problems/rotate-array/)

## Approaches

1. [Binary Search](#binary-search)
2. [Newton's Method (a.k.a. Newton–Raphson)](#newtons-method)

## Binary Search

### Code

```javascript
const mySqrt = (x) => {
  if (x < 2) {
    return 2;
  }
  let left = 1;
  let right = Math.floor(x / 2);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;
    console.log("right", right, "left", left, "mid", mid);
    if (square === x) return mid;
    if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
```

## Newton’s Method

### Code

```javascript
const mySqrt = (x) => {
  if (x < 2) return x; // sqrt(0)=0, sqrt(1)=1

  let g = x; // initial guess

  while (g * g > x) {
    // continue until guess is correct
    g = Math.floor((g + x / g) / 2);
    console.log("g", g);
  }

  return g; // floor(sqrt(x))
};
```

```javascript
console.log(mySqrt(2));
console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(100));
console.log(mySqrt(264));
console.log(mySqrt(252));
```
