// function sort012(arr) {
//   // code here
//   let zeros = [];
//   let ones = [];
//   let twos = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zeros.push(0);
//     } else if (arr[i] === 1) {
//       ones.push(1);
//     } else {
//       twos.push(2);
//     }
//   }

//   return [...zeros, ...ones, ...twos];
// }

function sort012(arr) {
  // code here

  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

console.log(sort012([0, 1, 2, 0, 1, 2]));
