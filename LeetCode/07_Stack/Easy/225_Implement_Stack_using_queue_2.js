// Using 2 Queues

var MyStack = function () {
  this.q = [];
};

MyStack.prototype.push = function (x) {
  this.q.push(x);
};

MyStack.prototype.pop = function () {
  let qlen = this.q.length;
  for (let i = 0; i < qlen - 1; i++) {
    this.q.push(this.q.shift());
  }

  return this.q.shift();
};

MyStack.prototype.top = function () {
  let qlen = this.q.length;
  for (let i = 0; i < qlen - 1; i++) {
    this.q.push(this.q.shift());
  }

  let last = this.q[0];
  this.q.push(this.q.shift());
  return last;
};

MyStack.prototype.empty = function () {
  return this.q.length === 0;
};

// [1,2,3,4,5]

var obj = new MyStack();
var results = [];
results.push(null); // MyStack constructor
obj.push(1);
results.push(null); // push(1)
obj.push(2);
results.push(null); // push(2)
obj.push(3);
results.push(null);
// results.push(obj.top()); // top()
results.push(obj.pop()); // pop()
// results.push(obj.empty()); // empty()
console.log(results);
