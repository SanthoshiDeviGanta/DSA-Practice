class Solution {
  getBinaryNum(num) {
    let binaryNum = "";
    while (num > 0) {
      let rem = num % 2;
      binaryNum += rem;
      num = Math.floor(num / 2);
    }

    return binaryNum;
  }
  isPallindrome(N) {
    // code here
    let binaryNum = this.getBinaryNum(N);
    console.log("binaryNum", binaryNum);
    let left = 0;
    let right = binaryNum.length - 1;

    while (left < binaryNum.length / 2) {
      if (binaryNum[left] !== binaryNum[right]) {
        return 0;
      }
      left++;
      right--;
    }

    return 1;
  }
}

let sol = new Solution();
// console.log(sol.isPallindrome(13));
// console.log(sol.isPallindrome(17));

console.log(sol.isPallindrome(60));
