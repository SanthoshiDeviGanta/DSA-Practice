var mirrorDistance = function (n) {
  let org = n;
  let rev = 0;
  while (n > 0) {
    let r = n % 10;
    rev = rev * 10 + r;
    n = Math.floor(n / 10);
  }
  console.log(rev);
  //   return Math.abs(rev - org);

  if (org > rev) {
    return org - rev;
  } else {
    return rev - org;
  }
};

console.log(mirrorDistance(476));
