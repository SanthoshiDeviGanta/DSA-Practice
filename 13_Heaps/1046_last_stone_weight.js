function heapifyDown(arr, arrLen, idx) {
  let left = idx * 2 + 1;
  let right = idx * 2 + 2;

  let largest = idx;

  if (left < arrLen && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < arrLen && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== idx) {
    [arr[largest], arr[idx]] = [arr[idx], arr[largest]];
    heapifyDown(arr, arrLen, largest);
  }
}

function heapifyUp(arr, idx) {
  while (idx > 0) {
    let parent = Math.floor((idx - 1) / 2);

    if (arr[parent] < arr[idx]) {
      [arr[parent], arr[idx]] = [arr[idx], arr[parent]];
      idx = parent;
    } else {
      break;
    }
  }
}

function extract(arr) {
  if (arr.length === 1) return arr.pop();
  let maxVal = arr[0];
  arr[0] = arr.pop();
  heapifyDown(arr, arr.length, 0);

  return maxVal;
}

function insert(arr, val) {
  arr.push(val);
  heapifyUp(arr, arr.length - 1);
}

var lastStoneWeight = function (stones) {
  for (let i = Math.floor((stones.length - 1) / 2); i >= 0; i--) {
    heapifyDown(stones, stones.length, i);
  }

  while (stones.length > 1) {
    let stn1 = extract(stones);
    let stn2 = extract(stones);
    if (stn1 - stn2 > 0) {
      insert(stones, stn1 - stn2);
    }
  }

  return stones[0] || 0;
};

//   console.log(stones);
// console.log("---", stn1, stn2);

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
// console.log("ans", lastStoneWeight([1, 3]));
// console.log("ans", lastStoneWeight([1, 2, 3, 4, 5, 6, 7, 8, 9, 100]));

// let root = [
//   316, 157, 73, 106, 771, 828, 46, 212, 926, 604, 600, 992, 71, 51, 477, 869,
//   425, 405, 859, 924, 45, 187, 283, 590, 303, 66, 508, 982, 464, 398,
// ];

let root = [4, 3, 4, 3, 2];
console.log("ans", lastStoneWeight(root));
