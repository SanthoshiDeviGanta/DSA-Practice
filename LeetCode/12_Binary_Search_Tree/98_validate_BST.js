import { buildTree } from "../utils/BinaryTree.js";

function validateBST(root) {
  function traversal(node, lb, ub) {
    if (!node) {
      return true;
    }
    if (lb != null && node.val <= lb) {
      return false;
    }
    if (ub != null && node.val >= ub) {
      return false;
    }
    return (
      traversal(node.left, lb, node.val) && traversal(node.right, node.val, ub)
    );
  }
  return traversal(root, null, null);
}

let root = buildTree([50, 30, 70, 20, 40, 60, 80]);
printTopDownTree(root);
console.log(validateBST(root));

console.log("================================================");
let root1 = buildTree([50, 90, 70, 20, 40, 60, 80]);
printTopDownTree(root1);
console.log(validateBST(root1));
