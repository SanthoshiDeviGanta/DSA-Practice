import { buildTree } from "../../LeetCode/utils/BinaryTree.js";

class Solution {
  getSize(root) {
    // code here
    let count = 0;
    function traversal(node) {
      if (!node) return 0;
      count++;
      traversal(node.left);
      traversal(node.right);
    }
    traversal(root);

    return count;
  }
}

let sol = new Solution();

let root = buildTree([55, 32, 64, 22, 41, null, null, 11]);

// console.log("root", root);

console.log(sol.getSize(root));
