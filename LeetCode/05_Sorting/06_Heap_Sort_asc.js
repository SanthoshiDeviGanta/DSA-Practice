// Ascending Order
// Given an unordered List
// 1. make it into max Heap in the same array [Now we will create max Heap Array]
//   -- creating max heap from unordered list into new array is consumig o(n) space again.,
//         but that's not a good way, so we will use the same unsorted array size to create the max heap
//   -- For that we will use the below pattern:
//      ---- We will start with last element of unsorted array and we will heapifyDown(max Heap) till the start of Array
//          -- In this process, leaf nodes dont create any impact., so we can eliminate them.
//          -- but the parent nodes start to heapifyDown until the max heap is created
// If we want the sort in ascending order --> the max value should be at the end of the list
//   -- 2. so we swap the First Max heap element with last Index
//   -- 3. and reduce the heap size (as we swapped the val)
// Now the array is not in max heap -->
//   -- 4. so we heapify down and again stabilize it to max heap
// Now repeating the process until the array is sorted

// Algorithm
// 1. Create Max Heap
//    -- Run loop in reverse
//    -- for each node, we create a maxHeap
// 2. Sort
//    -- Extract Max Ele from Heap
//    -- Swap the max elem with last Index and ignore that index.[HeapifyDown for max Heap]
//    -- Continue it till that array is sorted

function heapifyDown(arr, arrLen, i) {
  let largest = i;
  let leftIdx = 2 * i + 1;
  let rightIdx = 2 * i + 2;

  if (leftIdx < arrLen && arr[largest] < arr[leftIdx]) {
    largest = leftIdx;
  }
  if (rightIdx < arrLen && arr[largest] < arr[rightIdx]) {
    largest = rightIdx;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, arrLen, largest);
  }
}

function heapSort(arr) {
  let arrLen = arr.length;
  // Creating Max Heap

  //   the below code heapifiesDown to the leaf nodes as well
  //   for (let i = arrLen - 1; i >= 0; i--) {
  //     heapifyDown(arr, arrLen, i);
  //   }

  //   The below one avoid the heapifiesDown calculation for the leafnodes
  //   (arrLen - 1) / 2 gives count of parent nodes
  for (let i = Math.floor((arrLen - 1) / 2); i >= 0; i--) {
    heapifyDown(arr, arrLen, i);
  }
  console.log("maxHeap Arr", arr);

  // Sort the array
  for (let i = arrLen - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, i, 0);
  }

  return arr;
}

// console.log(heapSort([4, 10, 20, 5, 30]));

console.log("Sorted Arr", heapSort([1, 4, 10, 5, 3, 7, 9, 2]));
