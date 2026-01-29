class MyMinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  toArray() {
    return this.heap;
  }
  push(obj) {
    this.heap.push(obj);
    this.heapifyUp(this.heap.length - 1);
  }
  heapifyUp(idx) {
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      if (this.heap[idx].freq < this.heap[parentIdx].freq) {
        [this.heap[parentIdx], this.heap[idx]] = [
          this.heap[idx],
          this.heap[parentIdx],
        ];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
  extract() {
    let min = this.heap[0];
    let lastEle = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastEle;
      this.heapifyDown(0);
    }
    return min;
  }
  heapifyDown(idx) {
    let left = idx * 2 + 1;
    let right = idx * 2 + 2;
    let smallest = idx;

    if (
      left < this.heap.length &&
      this.heap[left].freq < this.heap[smallest].freq
    ) {
      smallest = left;
    }

    if (
      right < this.heap.length &&
      this.heap[right].freq < this.heap[smallest].freq
    ) {
      smallest = right;
    }

    if (smallest !== idx) {
      [this.heap[smallest], this.heap[idx]] = [
        this.heap[idx],
        this.heap[smallest],
      ];
      this.heapifyDown(smallest);
    }
  }
}

var topKFrequent = function (nums, k) {
  // Create a Map to know the count the frequency of elements.
  let numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    numsMap.set(nums[i], (numsMap.get(nums[i]) || 0) + 1);
  }

  // Create a MinHeap and restrict the size to k elements
  let pq = new MyMinHeap();
  for (let [key, freq] of numsMap) {
    pq.push({ val: key, freq });
    if (pq.size() > k) {
      pq.extract();
    }
  }

  console.log(pq);

  // return the final K elements

  return pq.toArray().map((i) => +i.val);
};

console.log(
  topKFrequent(
    [11, 22, 13, 22, 11, 23, 34, 11, 32, 23, 23, 82, 45, 45, 64, 23],
    2,
  ),
);
