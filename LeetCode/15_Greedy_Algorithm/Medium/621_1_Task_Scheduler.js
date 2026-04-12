/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n === 0) return tasks.length;

  // 1. Build frequency map
  const freqMap = new Map();
  for (const task of tasks) {
    freqMap.set(task, (freqMap.get(task) || 0) + 1);
  }

  // 2. Use an array to simulate a Max-Heap (storing just frequencies)
  let maxHeap = Array.from(freqMap.values()).sort((a, b) => b - a);

  // 3. Queue to track tasks on cooldown: [frequency, time_when_available]
  const waitQueue = [];
  let time = 0;

  while (maxHeap.length > 0 || waitQueue.length > 0) {
    time++;

    if (maxHeap.length > 0) {
      // Pick the task with the highest frequency
      let left = maxHeap.shift() - 1;

      if (left > 0) {
        // If task still has occurrences left, put it in waitQueue
        // It will be available at current time + n
        waitQueue.push([left, time + n]);
      }
    }

    // Check if any task in the waitQueue is ready to be moved back to maxHeap
    if (waitQueue.length > 0 && waitQueue[0][1] === time) {
      maxHeap.push(waitQueue.shift()[0]);
      // Re-sort to maintain Max-Heap property
      maxHeap.sort((a, b) => b - a);
    }
  }

  return time;
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
