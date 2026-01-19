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

export function printLongTopDownTree(root) {
  if (!root) return;

  const h = height(root);

  const nodeWidth = 3; // space reserved per node
  const maxWidth = Math.pow(2, h) * nodeWidth * 2;

  let queue = [{ node: root, pos: Math.floor(maxWidth / 2) }];
  let level = 0;

  while (queue.length && level < h) {
    const nextQueue = [];
    const line = Array(maxWidth).fill(" ");
    const branchLine = Array(maxWidth).fill(" ");

    const gap = Math.pow(2, h - level - 1) * nodeWidth;

    for (const { node, pos } of queue) {
      if (!node) continue;

      // Center node value in its block
      const val = String(node.val);
      const start = pos - Math.floor(val.length / 2);
      for (let i = 0; i < val.length; i++) {
        line[start + i] = val[i];
      }

      if (node.left) {
        branchLine[pos - 1] = "/";
        nextQueue.push({
          node: node.left,
          pos: pos - gap,
        });
      }

      if (node.right) {
        branchLine[pos + 1] = "\\";
        nextQueue.push({
          node: node.right,
          pos: pos + gap,
        });
      }
    }

    console.log(line.join(""));
    if (nextQueue.length) console.log(branchLine.join(""));

    queue = nextQueue;
    level++;
  }
}

let root1 = buildTree([50, 30, 70, 20, 40, 60, 80, 1, 2, 3, 4, 5, 6, 7, 8]);

printTopDownTree(root1);
