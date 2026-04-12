export class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (i < arr.length) {
    let current = queue.shift();

    // Left Child
    if (arr[i] !== null && i < arr.length) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    // Right Child
    if (arr[i] !== null && i < arr.length) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

export function findNode(root, val) {
  if (!root) return null;
  if (root.val === val) return root;

  return findNode(root.left, val) || findNode(root.right, val);
}

export function printBinaryDiagram(root, prefix = "", isLeft = true) {
  if (!root) return;

  // Print right subtree first
  if (root.right) {
    printBinaryDiagram(root.right, prefix + (isLeft ? "│   " : "    "), false);
  }

  // Print current node
  console.log(prefix + (isLeft ? "└── " : "┌── ") + root.val);

  // Print left subtree
  if (root.left) {
    printBinaryDiagram(root.left, prefix + (isLeft ? "    " : "│   "), true);
  }
}

// const arr = [1, 2, 3, null, 4, 5, 6];
// const root = buildTree(arr);

// console.log(root);

// const arr = [1, 2, 3, null, 4, 5, 6];
// const root = buildTree(arr);

// printBinaryDiagram(root);

// Root (1) is in the center

// Right subtree is printed upward

// Left subtree is printed downward

// ==================================================================================================================

// For Vertical Tree

function height(root) {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

export function printTopDownTree(root) {
  const h = height(root);
  let maxWidth = Math.pow(2, h) * 2;

  let queue = [{ node: root, pos: Math.floor(maxWidth / 2) }];
  let level = 0;

  while (queue.length && level < h) {
    let nextQueue = [];
    let line = Array(maxWidth).fill(" ");
    let branchLine = Array(maxWidth).fill(" ");

    for (let { node, pos } of queue) {
      if (!node) continue;

      line[pos] = String(node.val);

      if (node.left) {
        branchLine[pos - 1] = "/";
        nextQueue.push({
          node: node.left,
          pos: pos - Math.pow(2, h - level - 2),
        });
      }

      if (node.right) {
        branchLine[pos + 1] = "\\";
        nextQueue.push({
          node: node.right,
          pos: pos + Math.pow(2, h - level - 2),
        });
      }
    }

    console.log(line.join(""));
    if (nextQueue.length) console.log(branchLine.join(""));

    queue = nextQueue;
    level++;
  }
}

// const arr1 = [1, 2, 3, null, 4, 5, 6];
// const root1 = buildTree(arr1);

// printTopDownTree(root1);

// let root = buildTree([50, 30, 70, 20, 40, 60, 80, 1, 2, 3, 4, 5, 6, 7, 8]);
