// function dailyTemperatures(temperatures) {
//   let stack = [];
//   let ans = [];
//   for (let i = temperatures.length - 1; i >= 0; i--) {
//     let curr = temperatures[i];

//     while (stack.length && curr >= stack[stack.length - 1][0]) {
//       stack.pop();
//     }
//     let top = stack.length ? stack[stack.length - 1][1] - i : 0;
//     ans.push(top);
//     stack.push([curr, i]);
//     // console.log("stack", stack);
//   }

//   return ans.reverse();
// }

function dailyTemperatures(temperatures) {
  let stack = [];
  let ans = new Array(temperatures.length).fill(0);
  for (let i = temperatures.length - 1; i >= 0; i--) {
    let curr = temperatures[i];
    while (stack.length && curr >= temperatures[stack[stack.length - 1]]) {
      stack.pop();
    }
    ans[i] = stack.length ? stack[stack.length - 1] - i : 0;
    stack.push(i);
  }

  return ans;
}
// console.log("stack", stack);
//--------------------------// 0.   1.  2  3.  4   5.  6.  7
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

// “I traverse from right to left and maintain a monotonically decreasing stack of indices.
// For each day, I pop all indices with temperatures less than or equal to the current day because they cannot be the next warmer day.
// The top of the stack then gives me the next warmer day’s index, and I compute the difference.
// This ensures O(n) time since each index is pushed and popped once.”
