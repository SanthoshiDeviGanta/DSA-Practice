var removeOuterParentheses1 = function (s) {
  let count = 0;
  let out = "";
  //   for (let i = 0; i < s.length; i++) {
  //     let si = s[i];
  //     if (si === "(" && count === 0) {
  //       count++;
  //     } else if (count === 1 && si === ")") {
  //       count--;
  //     } else {
  //       if (si === "(") {
  //         out = out + si;
  //         count++;
  //       }
  //       if (si === ")") {
  //         out = out + si;
  //         count--;
  //       }
  //     }
  //   }

  for (let i = 0; i < s.length; i++) {
    let si = s[i];
    if (si === "(") {
      if (count > 0) {
        out = out + si;
      }
      count++;
    } else {
      if (count > 1) {
        out = out + si;
      }
      count--;
    }
  }
  return out;
};

var removeOuterParentheses = function (s) {
  let stack = [],
    out = "";

  for (let i = 0; i < s.length; i++) {
    let si = s[i];
    if (si === "(") {
      if (stack.length > 0) {
        out += si;
      }
      stack.push(si);
    } else {
      if (stack.length > 1) {
        out += si;
      }
      stack.pop();
    }
  }
  return out;
};
console.log(removeOuterParentheses("(()())(())(()(()))"));
// (()()) (()) (()(())) -- ()() () ()(())
