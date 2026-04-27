class Solution {
  smallestSubstring(s) {
    // code here
    let c0 = 0,
      c1 = 0,
      c2 = 0;

    let ans = Infinity;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
      if (s[right] == "0") c0++;
      else if (s[right] == "1") c1++;
      else if (s[right] === "2") c2++;

      while (c0 > 0 && c1 > 0 && c2 > 0) {
        ans = Math.min(ans, right - left + 1);

        console.log(c0, c1, c2);

        console.log("left", left, "right", right);

        if (s[left] === "0") c0--;
        else if (s[left] === "1") c1--;
        else if (s[left] === "2") c2--;

        left++;
      }
    }

    return ans === Infinity ? -1 : ans;
  }
}

let sol = new Solution();
// console.log(sol.smallestSubstring("10212"));

// console.log(sol.smallestSubstring("10102"));

console.log(sol.smallestSubstring("022001"));
