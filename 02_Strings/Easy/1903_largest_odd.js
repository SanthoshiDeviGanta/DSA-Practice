var largestOddNumber = function (num) {
  let right = num.length - 1;
  for (let i = right; i >= 0; i--) {
    if (+num[i] % 2 !== 0) {
      return num.slice(0, i + 1);
    }
  }
  return "";
};

console.log("out=", largestOddNumber("35427"));
console.log("out=", largestOddNumber("4806"));
console.log("out=", largestOddNumber("52"));
