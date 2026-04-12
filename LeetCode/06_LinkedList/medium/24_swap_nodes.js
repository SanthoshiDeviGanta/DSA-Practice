import { ListNode, arrayToLL } from "../0_LL.js";

// Using Recursion:

function swapPairs(head) {
  console.log("san head", JSON.stringify(head));

  if (!head || !head.next) {
    return head;
  }

  let left = head;
  let right = head.next;

  left.next = swapPairs(right.next);
  right.next = left;

  return right;
}

//  Using While Loop and swapping
// function swapPairs(head) {
//   if (!head || !head.next) {
//     return head;
//   }

//   let dummy = new ListNode();
//   let p = dummy;
//   let c = head;
//   let n = head.next;

//   while (c && c.next) {
//     p.next = n;
//     c.next = n.next;
//     n.next = c;

//     p = c;
//     c = p.next;
//     n = c && c.next;
//   }

//   return dummy.next;
// }

let head = arrayToLL([1, 2, 3, 4, 5, 6, 7]);
console.log(JSON.stringify(swapPairs(head)));

// let head = arrayToLL([1]);
// console.log(JSON.stringify(swapPairs(head)));
