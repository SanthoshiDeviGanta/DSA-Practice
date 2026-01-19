import { buildTree, printTopDownTree, TreeNode } from "../utils/BinaryTree.js";

function insertIntoBST(root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
}

let root = buildTree([4, 2, 7, 1, 3]);
printTopDownTree(root);
console.log("================================================");
printTopDownTree(insertIntoBST(root, 5));
