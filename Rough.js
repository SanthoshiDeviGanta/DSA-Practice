// console.log([].length > 0 ? true : false);

function test(root) {
  //   if (root.length > 0) return root;
  if (!root) return [];
  return root;
}

console.log(test([1, 2]));
console.log(test([]));
