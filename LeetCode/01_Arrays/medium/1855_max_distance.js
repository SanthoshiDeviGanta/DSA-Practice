var maxDistance1 = function (nums1, nums2) {
  let maxDis = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      console.log("i, j", i, j);
      if (nums1[i] <= nums2[j]) {
        if (i <= j) {
          maxDis = Math.max(maxDis, j - i);
        }
      } else {
        break;
      }
    }
  }

  return maxDis;
};

var maxDistance = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let ans = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      ans = Math.max(ans, j - i);
      j++; // try to increase distance
    } else {
      // nums1[i] is too big for current j; move i forward
      i++;
    }
  }

  return ans;
};

// console.log(maxDistance([55, 30, 5, 4, 2], [100, 20, 10, 10, 5])); // 2

console.log(maxDistance([2, 2, 2], [10, 10, 1])); // 1
