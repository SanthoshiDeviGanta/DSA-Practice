class Heap {
  constructor() {
    this.heap = [];
  }
  peek() {
    if (this.heap.length < 1) return null;
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
  heapifyUp(idx) {
    while (idx > 0) {
      let insertedVal = this.heap[idx];
      let parentIndex = this.getParentIndex(idx);
      if (this.heap[parentIndex] > insertedVal) {
        [this.heap[parentIndex], this.heap[idx]] = [
          this.heap[idx],
          this.heap[parentIndex],
        ];
        idx = parentIndex;
      } else {
        break;
      }
    }
  }
  extract() {
    if (this.heap.length < 1) return null;
    let extractedMin = this.heap[0];
    let lastIndex = this.heap.length - 1;
    [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];

    this.heap.pop();

    this.heapifyDown(0);

    return extractedMin;
  }

  heapifyDown(i) {
    let heapLen = this.heap.length;
    let leftIndex = this.getLeftChildIndex(i);
    let rightIndex = this.getRightChildIndex(i);

    let minIndex = i;
    if (leftIndex < heapLen && this.heap[leftIndex] < this.heap[minIndex]) {
      minIndex = leftIndex;
    }
    if (rightIndex < heapLen && this.heap[rightIndex] < this.heap[minIndex]) {
      minIndex = rightIndex;
    }

    if (minIndex !== i) {
      [this.heap[i], this.heap[minIndex]] = [this.heap[minIndex], this.heap[i]];
      this.heapifyDown(minIndex);
    }
  }
}

let root = new Heap();
root.insert(5);
root.insert(20);
root.insert(4);
root.insert(10);
root.insert(1);
root.insert(3);
root.insert(0);
console.log("peek", root.peek());
console.log(root);
console.log("extractedMin", root.extract());

console.log(root);

//        0
//   4       1
// 20 10   5    3

// 1st Extract:
// removed 0

//        3
//   4       1
// 20 10   5

//       1
//   4       3
// 20 10   5
