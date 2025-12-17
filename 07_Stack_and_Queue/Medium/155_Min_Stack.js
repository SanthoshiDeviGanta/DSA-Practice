var MinStack = function () {
  this.s = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let min;
  if (this.s.length === 0) {
    min = val;
  } else {
    min = Math.min(val, this.s[this.s.length - 1][1]);
  }
  this.s.push([val, min]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.s.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.s[this.s.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1];
};

function runTest(operations, params) {
  let obj = null;
  let results = [];
  for (let i = 0; i < operations.length; i++) {
    let op = operations[i];
    let param = params[i];
    if (op === "MinStack") {
      obj = new MinStack();
      results.push(null);
    } else if (op === "push") {
      obj.push(param[0]);
      results.push(null);
    } else if (op === "pop") {
      console.log("obj", obj);
      obj.pop();
      results.push(null);
    } else if (op === "top") {
      results.push(obj.top());
    } else if (op === "getMin") {
      results.push(obj.getMin());
    }
  }
  return results;
}

// Test with example
let operations = [
  "MinStack",
  "push",
  "push",
  "push",
  "push",
  "getMin",
  "pop",
  "getMin",
  "pop",
  "getMin",
  "pop",
  "getMin",
];
let params = [[], [2], [0], [3], [0], [], [], [], [], [], [], []];
console.log(runTest(operations, params)); // Shoul
