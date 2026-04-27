class Solution {
  reducePairs(nums) {
    let stack = [];

    for (let currNum of nums) {
      let isPush = true;

      while (stack.length > 0) {
        console.log("here", stack);

        let topNum = stack[stack.length - 1];

        //  Refers Both are same sign (- * - = +)
        if (topNum * currNum > 0) {
          break;
        }

        let absTop = Math.abs(topNum);
        let absCurr = Math.abs(currNum);

        if (absTop === absCurr) {
          stack.pop();
          isPush = false;
          break;
        }
        if (absTop < absCurr) {
          stack.pop();
        }
        if (absTop > absCurr) {
          isPush = false;
          break;
        }
      }

      if (isPush) {
        stack.push(currNum);
      }
    }

    return stack;
  }
}

let sol = new Solution();

console.log(sol.reducePairs([10, -5, -8, 2, -5]));
