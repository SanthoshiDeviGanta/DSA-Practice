import { arrayToLL, ListNode } from "../0_LL.js";

// function partition(head, x) {
//   let low = new ListNode();
//   let high = new ListNode();

//   let lowDummy = low;
//   let highDummy = high;
//   let temp = head;

//   while (temp) {
//     if (temp.val < x) {
//       low.next = temp;
//       low = low.next;
//     } else {
//       high.next = temp;
//       high = high.next;
//     }

//     temp = temp.next;
//   }

//   // console.log("san high", JSON.stringify(high));
//   // console.log("san low", JSON.stringify(low));
//   // console.log("san highDummy", JSON.stringify(highDummy));
//   // console.log("san lowDummy", JSON.stringify(lowDummy));

//   high.next = null;
//   low.next = highDummy.next;

//   // console.log("san high", JSON.stringify(high));
//   // console.log("san low", JSON.stringify(low));
//   // console.log("san highDummy", JSON.stringify(highDummy));
//   // console.log("san lowDummy", JSON.stringify(lowDummy));

//   return lowDummy.next;
// }

function partition(head, x) {
  let low = new ListNode();
  let high = new ListNode();

  let lowDummy = low;
  let highDummy = high;
  let temp = head;

  while (temp) {
    if (temp.val < x) {
      low.next = temp;
      low = low.next;
    } else {
      high.next = temp;
      high = high.next;
    }

    temp = temp.next;
  }

  // console.log("san high", JSON.stringify(high));
  // console.log("san low", JSON.stringify(low));
  // console.log("san highDummy", JSON.stringify(highDummy));
  // console.log("san lowDummy", JSON.stringify(lowDummy));

  high.next = null;
  low.next = highDummy.next;

  // console.log("san high", JSON.stringify(high));
  // console.log("san low", JSON.stringify(low));
  // console.log("san highDummy", JSON.stringify(highDummy));
  // console.log("san lowDummy", JSON.stringify(lowDummy));

  return lowDummy.next;
}

let head = arrayToLL([1, 4, 3, 2, 5, 2]);
// let head = arrayToLL([1, 4, 6, 3, 2, 5]);
console.log(JSON.stringify(partition(head, 3)));
