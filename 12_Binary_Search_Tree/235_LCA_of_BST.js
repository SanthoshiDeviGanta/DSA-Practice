import { buildTree, findNode, printTopDownTree } from "../utils/BinaryTree.js";

// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia:
// “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants
// (where we allow a node to be a descendant of itself).”

// The number of nodes in the tree is in the range [2, 105].

// Normal any Binary Tree Search
// function lowestCommonAncestor(root, p, q) {
//   if (!root) return null;

//   if (root === p || root === q) {
//     return root;
//   }

//   let rootLeft = lowestCommonAncestor(root.left, p, q);
//   let rootRight = lowestCommonAncestor(root.right, p, q);

//   if (rootLeft && rootRight) {
//     return root;
//   }

//   return rootLeft ? rootLeft : rootRight;
// }

// LCA particularly for the Balanced Binary Search Tree
function lowestCommonAncestor(root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}

let arr = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
let root = buildTree(arr);
printTopDownTree(root);

console.log(
  " ==================================================================================================================",
);

let p1 = findNode(root, 0);
let q1 = findNode(root, 5);
printTopDownTree(lowestCommonAncestor(root, p1, q1));

console.log(
  " ==================================================================================================================",
);

let p2 = findNode(root, 2);
let q2 = findNode(root, 8);
printTopDownTree(lowestCommonAncestor(root, p2, q2));
