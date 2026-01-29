class Heap {
  constructor() {
    this.heap = [];
  }
  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  insert(ele) {
    this.heap.push(ele);
    this.heapifyUp(this.heap.length - 1);
  }
  heapifyUp(newIdx) {
    while (newIdx > 0) {
      let insertedVal = this.heap[newIdx];
      let parentIndex = this.getParentIndex(newIdx);
      let parentVal = this.heap[parentIndex];

      if (parentVal < insertedVal) {
        [this.heap[parentIndex], this.heap[newIdx]] = [
          this.heap[newIdx],
          this.heap[parentIndex],
        ];
        newIdx = parentIndex;
      } else {
        break;
      }
    }
  }
  extract() {
    if (this.heap.length === 0) return null;
    let max = this.heap[0];
    let lastIndex = this.heap.length - 1;
    [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];
    this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  heapifyDown(newIdx) {
    let heapLen = this.heap.length;
    let leftChildIdx = this.getLeftChildIndex(newIdx);
    let rightChildIdx = this.getRightChildIndex(newIdx);
    let newVal = this.heap[newIdx];
    let maxIdx = newIdx;

    if (leftChildIdx < heapLen && this.heap[leftChildIdx] > this.heap[maxIdx]) {
      maxIdx = leftChildIdx;
    }
    if (
      rightChildIdx < heapLen &&
      this.heap[rightChildIdx] > this.heap[maxIdx]
    ) {
      maxIdx = rightChildIdx;
    }

    if (maxIdx !== newIdx) {
      [this.heap[newIdx], this.heap[maxIdx]] = [
        this.heap[maxIdx],
        this.heap[newIdx],
      ];

      this.heapifyDown(maxIdx);
    }
  }
}

let heap = new Heap();
heap.insert(4);
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(30);
console.log(heap);
console.log(heap.extract());
console.log(heap);

//     console.log(newIdx);
// console.log(parentIndex);
