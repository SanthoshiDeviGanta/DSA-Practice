// Map
// var carPooling = function (trips, capacity) {
//   let travelMap = new Map();

//   for (let [count, start, end] of trips) {
//     travelMap.set(start, (travelMap.get(start) || 0) + count);
//     travelMap.set(end, (travelMap.get(end) || 0) - count);
//   }

//   const sortedMap = new Map(
//     [...travelMap.entries()].sort((a, b) => a[0] - b[0]),
//   );

//   console.log("travelMap", travelMap);
//   console.log("sortedMap", sortedMap);

//   let currCount = 0;

//   for (let [key, values] of sortedMap) {
//     console.log("values", values);

//     currCount += values;

//     if (currCount > capacity) {
//       return false;
//     }
//   }

//   return true;
// };

// Object
// var carPooling = function (trips, capacity) {
//   let travelMap = {};
//   let currCount = 0;

//   for (let [count, start, end] of trips) {
//     travelMap[start] = (travelMap[start] || 0) + count;
//     travelMap[end] = (travelMap[end] || 0) - count;
//   }

//   //   console.log("travelMap", travelMap);

//   for (let [key, values] of Object.entries(travelMap)) {
//     currCount += values;

//     if (currCount > capacity) {
//       return false;
//     }
//   }

//   return true;
// };

// Array
var carPooling = function (trips, capacity) {
  let travelArr = new Array(1001).fill(0);
  let currCapacity = 0;

  for (let [count, start, end] of trips) {
    travelArr[start] = travelArr[start] + count;
    travelArr[end] = travelArr[end] - count;
  }
  for (let i of travelArr) {
    currCapacity += i;
    if (currCapacity > capacity) {
      return false;
    }
  }

  return true;
};

console.log(
  carPooling(
    [
      [1, 1, 4],
      [9, 4, 9],
      [9, 1, 9],
      [2, 3, 5],
      [4, 1, 5],
      [10, 4, 5],
    ],
    33,
  ),
);
