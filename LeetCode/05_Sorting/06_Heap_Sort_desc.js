// Descending Order

function heapifyDown(arr, arrLen, idx) {
  let leftChildIdx = idx * 2 + 1;
  let rightChildIdx = idx * 2 + 2;

  let smallIdx = idx;

  if (leftChildIdx < arrLen && arr[smallIdx] > arr[leftChildIdx]) {
    smallIdx = leftChildIdx;
  }
  if (rightChildIdx < arrLen && arr[smallIdx] > arr[rightChildIdx]) {
    smallIdx = rightChildIdx;
  }

  if (smallIdx !== idx) {
    [arr[idx], arr[smallIdx]] = [arr[smallIdx], arr[idx]];
    heapifyDown(arr, arrLen, smallIdx);
  }
}

function heapSort(arr) {
  console.log(arr);
  let arrLen = arr.length;
  //  Create Min Heap array from unordered list by traversing the from backside
  //  No need to do heapifyDown for leaf nodes., only for parent nodes (n-1/2)
  for (let i = Math.floor((arrLen - 1) / 2); i >= 0; i--) {
    heapifyDown(arr, arrLen, i);
  }

  //   Sort the array in Descending order by placing small elem at end
  for (let i = arrLen - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, i, 0);
  }

  return arr;
}

let root = [34, 45, 76, 89, 23, 12];
console.log(heapSort(root));

//          34
//     45.      76
//   89. 23.  12
