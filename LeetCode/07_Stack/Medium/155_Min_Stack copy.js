var MinStack = function () {
  this.s = [];
  this.min;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.s.length === 0) {
    this.min = val;
  } else if (val < this.min) {
    this.min = val;
  }
  this.s.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let last = this.s.pop();
  console.log("last", last, this.min <= last);

  if (this.s.legth > 0) {
    this.min = Math.min(...this.s1);
  } else {
    this.min = undefined;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  let top = this.s.pop();
  this.s.push(top);
  return top;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
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
