// Direct known approach
var evalRPN1 = function (tokens) {
  let operators = ["+", "-", "*", "/"];
  let stack = [];
  let out;
  for (let i = 0; i < tokens.length; i++) {
    if (operators.includes(tokens[i])) {
      let var2 = stack.pop();
      let var1 = stack.pop();

      if (tokens[i] === "+") {
        out = var1 + var2;
      } else if (tokens[i] === "-") {
        out = var1 - var2;
      } else if (tokens[i] === "*") {
        out = var1 * var2;
      } else if (tokens[i] === "/") {
        out = Math.trunc(var1 / var2);
      }
      stack.push(out);
    } else {
      stack.push(+tokens[i]);
    }
    // console.log("stack", i, stack);
  }

  //   console.log("out", out);

  return stack.pop();
};

// Operations optimized approach
var evalRPN2 = function (tokens) {
  let stack = [];
  let ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  for (let i = 0; i < tokens.length; i++) {
    if (ops[tokens[i]]) {
      let var2 = stack.pop();
      let var1 = stack.pop();

      let out = ops[tokens[i]](var1, var2);
      stack.push(out);
    } else {
      stack.push(+tokens[i]);
    }
  }

  return stack.pop();
};

// much more without operations

function evalRPN(tokens) {
  let stack = [];
  let ops = new Set(["+", "-", "*", "/"]);
  for (let i = 0; i < tokens.length; i++) {
    if (ops.has(tokens[i])) {
      let var2 = stack.pop();
      let var1 = stack.pop();
      let ans = eval(`${var1} ${tokens[i]} ${var2}`);
      stack.push(Math.trunc(ans));
    } else {
      stack.push(+tokens[i]);
    }
  }
  return stack.pop();
}

// console.log(evalRPN(["4", "13", "5", "/", "+"])); //6
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
); // 22

console.log(evalRPN(["2", "1", "+", "3", "*"])); //9
