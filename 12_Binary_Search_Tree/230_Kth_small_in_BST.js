import { buildTree, printTopDownTree } from "../utils/BinaryTree.js";

function kthSmallinBST(root, kSmall) {
  let count = kSmall;
  let ans;

  function traversal(node) {
    if (!node) return;
    if (ans != null) return;
    traversal(node.left);
    count--;
    if (count === 0) {
      ans = node.val;
    }
    traversal(node.right);
  }
  traversal(root);

  return ans;
}

let root = buildTree([55, 32, 64, 22, 41, null, null, 11]);
printTopDownTree(root);

console.log("================================================");

// printTopDownTree(kthSmallinBST(root, 2));

console.log(kthSmallinBST(root, 2));
