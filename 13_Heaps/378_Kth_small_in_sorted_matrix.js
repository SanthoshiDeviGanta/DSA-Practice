class MyMinHeap {
  constructor() {
    this.heap = [];
  }
  insert(ele) {
    this.heap.push(ele);
    this.heapifyUp(this.heap.length - 1);
  }
  heapifyUp(idx) {
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);

      if (this.heap[parent].val > this.heap[idx].val) {
        [this.heap[parent], this.heap[idx]] = [
          this.heap[idx],
          this.heap[parent],
        ];
        idx = parent;
      } else {
        break;
      }
    }
  }
  extract() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let min = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return min;
  }
  heapifyDown(idx) {
    let left = idx * 2 + 1;
    let right = idx * 2 + 2;
    let small = idx;

    if (left < this.heap.length && this.heap[left].val < this.heap[small].val) {
      small = left;
    }
    if (
      right < this.heap.length &&
      this.heap[right].val < this.heap[small].val
    ) {
      small = right;
    }

    if (small !== idx) {
      [this.heap[idx], this.heap[small]] = [this.heap[small], this.heap[idx]];
      this.heapifyDown(small);
    }
  }
}

function kthSmallInSortedMatrix(matrix, k) {
  // To create MinHeap from the 1st col elements of Matrix
  let pq = new MyMinHeap();
  for (let i = 0; i < matrix.length; i++) {
    pq.insert({ val: matrix[i][0], row: i, col: 0 });
  }
  // To continue the removal and addition of matrix elements until Kth small is reached from MinHeap
  for (let i = 0; i < k - 1; i++) {
    let { val, row, col } = pq.extract();
    if (col + 1 < matrix[0].length) {
      pq.insert({ val: matrix[row][col + 1], row, col: col + 1 });
    }
  }

  return pq.extract().val;
}

console.log(
  kthSmallInSortedMatrix(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    8,
  ),
);
