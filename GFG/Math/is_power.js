function isPower(x, y) {
  // code here
  if (y === 1) return true;
  if (x <= 1 || y <= 0) return false;

  while (y % x === 0) {
    y = y / x;
  }

  return y === 1;
}

console.log(isPower(2, 8));
console.log(isPower(1, 8));
console.log(isPower(2, 256));
console.log(isPower(50, 312500000));
console.log(isPower(7, 3));
console.log(isPower(100, 1));
