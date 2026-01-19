// return the matched value related sub tree

import { buildTree, printTopDownTree } from "../utils/BinaryTree.js";

// function searchBST(root, val) {
//   if (!root || root.val === val) {
//     return root;
//   } else {
//     if (val < root.val) {
//       return searchBST(root.left, val);
//     } else {
//       return searchBST(root.right, val);
//     }
//   }
// }

function searchBST(root, val) {
  if (!root || root.val === val) {
    return root;
  }
  return val < root.val
    ? searchBST(root.left, val)
    : searchBST(root.right, val);
}

let root = buildTree([4, 2, 7, 1, 3]);
printTopDownTree(root);

console.log("================================================");
printTopDownTree(searchBST(root, 2));

console.log("================================================");
printTopDownTree(searchBST(buildTree([]), 2));
