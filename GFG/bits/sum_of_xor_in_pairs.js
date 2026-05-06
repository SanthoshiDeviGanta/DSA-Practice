class Solution {
  sumXORLong(arr) {
    // code here
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        sum += arr[i] ^ arr[j];
      }
    }

    return sum;
  }

  sumXOR(arr) {
    const n = arr.length;
    let sum = 0;

    for (let bit = 0; bit < 32; bit++) {
      const mask = 1 << bit;
      console.log("bit", bit, "----", "mask", mask);

      let cnt1 = 0;

      for (let i = 0; i < n; i++) {
        console.log("arr[i] & mask", arr[i] & mask);

        if (arr[i] & mask) cnt1++;
      }

      const cnt0 = n - cnt1;

      sum += cnt1 * cnt0 * mask;

      console.log("sum", sum);
      console.log("-------------");
    }

    return sum;
  }
}

let sol = new Solution();

console.log(sol.sumXOR([5, 9, 7, 6]));
