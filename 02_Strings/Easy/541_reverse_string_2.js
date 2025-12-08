// function reverseStr(str, k) {
//   let i = 0;
//   while (i < str.length) {
//     let first = str.slice(0, i);
//     let second = str
//       .slice(i, i + k)
//       .split("")
//       .reverse()
//       .join("");
//     let third = str.slice(i + k);

//     console.log("first", first);
//     console.log("second", second);
//     console.log("third", third);

//     str = first + second + third;
//     console.log("str", str);
//     console.log("-----");
//     i = i + 2 * k;
//   }

//   return str;
// }
// //  Time : O(n) * O(n/k) = O(n^2/k) === O(n^2)
// //  Space : O(n)

function reverseStr(str, k) {
  let splitted = str.split("");

  for (let i = 0; i < str.length; i = i + 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, splitted.length - 1);

    while (left < right) {
      [splitted[left], splitted[right]] = [splitted[right], splitted[left]];
      left++;
      right--;
    }
  }

  return splitted.join("");
}

// console.log("out", reverseStr("abcdefghijklmopq", 3)); // "cbadefihgjklpomq"
// console.log("out", reverseStr("abcdefghijklmopqrstu", 3)); // "cbadefihgjklpomqrstu"

console.log("out", reverseStr("abcdefg", 2)); // bacdfeg
console.log("out", reverseStr("abcdefgh", 3)); // "cbadefhg"

function reverseArr(arr) {
  let mid = Math.floor(arr.length / 2);
  let left = 0;
  let right = arr.length - 1;
  // console.log("arr", arr, mid);
  // console.log("left", left, "right", right);

  while (left < mid) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}

// console.log(reverseArr("abcde".split("")));
