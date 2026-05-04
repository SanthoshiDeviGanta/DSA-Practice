class Solution {
  countSetBits(num) {
    let count = 0;
    while (num) {
      num = num & (num - 1);
      count++;
    }

    return count;
  }

  sortBySetBitCount(arr) {
    // code here

    const decorated = arr.map((val, idx) => ({
      val,
      bits: this.countSetBits(val),
      idx,
    }));

    console.log("decorated", decorated);

    decorated.sort((a, b) => {
      if (b.bits != a.bits) return b.bits - a.bits;

      return a.index - b.index;
    });

    console.log("decorated", decorated);

    return decorated.map((val) => val.val);
  }
}

let sol = new Solution();

console.log(sol.sortBySetBitCount([5, 2, 3, 9, 4, 6, 7, 15, 32]));
