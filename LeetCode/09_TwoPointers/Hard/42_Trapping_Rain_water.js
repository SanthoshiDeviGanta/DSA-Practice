function trap(height) {
  let maxLeft = [];
  let maxRight = new Array(height.length).fill(0);
  let maxL = height[0];
  let maxR = height[height.length - 1];
  let sum = 0;

  //   for (let i = 0; i < height.length; i++) {
  //     max = Math.max(height[i], max);
  //     maxLeft.push(max);
  //   }
  //   //   console.log("maxLeft", maxLeft);
  //   max = 0;
  //   for (let i = height.length - 1; i >= 0; i--) {
  //     max = Math.max(height[i], max);
  //     maxRight[i] = max;
  //   }
  //   //   console.log("maxRight", maxRight);

  for (let i = 0; i < height.length; i++) {
    maxL = Math.max(height[i], maxL);
    maxLeft[i] = maxL;

    maxR = Math.max(height[height.length - 1 - i], maxR);
    maxRight[height.length - 1 - i] = maxR;
  }

  console.log("maxLeft", maxLeft);
  console.log("maxRight", maxRight);

  for (let i = 0; i < height.length; i++) {
    let min = Math.min(maxLeft[i], maxRight[i]);
    sum += min - height[i];
  }

  return sum;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
