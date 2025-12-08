import { arrayToLL, ListNode } from "../0_LL.js";

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

// let head = arrayToLL([1, 2, 3, 3, 4, 4, 5, 5]);
let head = arrayToLL([1, 1, 1, 2, 3]);
console.log(JSON.stringify(deleteDuplicates(head)));
