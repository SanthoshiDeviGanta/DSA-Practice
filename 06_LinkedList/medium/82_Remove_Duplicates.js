import { arrayToLL, ListNode } from "../0_LL.js";

// function deleteDuplicates(head) {
//   let dummy = new ListNode();
//   dummy.next = head;

//   let prev = dummy;
//   let temp = head;

//   while (temp) {
//     if (temp.next && temp.next.val === temp.val) {
//       let dupValue = temp.val;
//       while (temp && temp.val === dupValue) {
//         temp = temp.next;
//       }
//       prev.next = temp;
//     } else {
//       prev = prev.next;
//       temp = temp.next;
//     }
//   }
//   console.log("dummy", JSON.stringify(dummy));
//   console.log("temp", JSON.stringify(temp));
//   return dummy.next;
// }

// let head = arrayToLL([1, 1, 2, 2, 3, 4]);

var deleteDuplicates = function (head) {
  let dummy = new ListNode();
  dummy.next = head;

  let temp = head;
  let prev = dummy;

  while (temp) {
    if (temp.next && temp.val === temp.next.val) {
      let dupVal = temp.val;
      while (temp && temp.val === dupVal) {
        temp = temp.next;
      }
      prev.next = temp;
    } else {
      prev = prev.next;
      temp = temp.next;
    }
  }

  return dummy.next;
};

let head = arrayToLL([1, 2, 3, 3, 4, 4, 5, 5]);
console.log(JSON.stringify(deleteDuplicates(head)));
