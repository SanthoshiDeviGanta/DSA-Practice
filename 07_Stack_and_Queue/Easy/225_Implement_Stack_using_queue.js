// Using 2 Queues

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

MyStack.prototype.pop = function () {
  let q1Len = this.q1.length;
  for (let i = 0; i < q1Len - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let last = this.q1.shift();
  [this.q1, this.q2] = [this.q2, this.q1];

  return last;
};

MyStack.prototype.top = function () {
  let q1Len = this.q1.length;
  for (let i = 0; i < q1Len - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let topEle = this.q1[0];
  this.q2.push(this.q1.shift());
  [this.q1, this.q2] = [this.q2, this.q1];

  return topEle;
};

MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

// var obj = new MyStack();
// var results = [];
// results.push(null); // MyStack constructor
// obj.push(1);
// results.push(null); // push(1)
// obj.push(2);
// results.push(null); // push(2)
// obj.push(3);
// results.push(null);
// results.push(obj.top()); // top()
// results.push(obj.pop()); // pop()
// results.push(obj.empty()); // empty()
// console.log(results);

var obj = new MyStack();
obj.push(1);
obj.push(2);
var param_2 = obj.pop();
var param_3 = obj.top();
var param_4 = obj.empty();

console.log(obj);
