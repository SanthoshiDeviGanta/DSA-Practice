function myAtoi(s) {
  // code here
  s = s.trim();
  let isNeg = s[0] === "-";
  let isPos = s[0] === "+";
  let num = "";

  for (let i = isNeg || isPos ? 1 : 0; i < s.length; i++) {
    console.log("+s[i]", +s[i]);
    if (s[i] == "0" && num == "") continue;
    if (+s[i] >= 0 || +s[i] <= 9) {
      num += s[i];
    } else {
      break;
    }
  }
  console.log("num", num);

  let maxNum = Math.pow(2, 31);
  //   num = +num > maxNum ? maxNum : +num;
  if (+num > maxNum) {
    if (isNeg) {
      num = maxNum;
    } else {
      num = maxNum - 1;
    }
  }
  console.log("num", num);

  if (num.length === 0) {
    return 0;
  }
  return isNeg ? -num : num;
}

console.log(myAtoi(" -"));

// console.log(myAtoi("  -0012gfg4"));

// console.log(myAtoi("-999999999999"));

// console.log(myAtoi("    +460ctdg"));

// console.log(myAtoi("-123"));

// console.log(myAtoi(" 1231231231311133"));
// console.log(myAtoi("-999999999999"));
