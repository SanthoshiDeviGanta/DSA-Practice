import { arrayToLL } from "../0_LL.js";

function rotateRight(head, k) {
    if (!head || !head.next) { return head }
    let size = 0;
    let temp = head;
    while (temp) {
        size++;
        temp = temp.next;
    }

    let rotate = k % size;
    // console.log(rotate);
    let fast = head, slow = head;
    for (let i = 0; i < rotate; i++) {
        fast = fast.next;
    }
    console.log("fasr", fast);
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    // console.log("slow", slow);
    // console.log("fasr", fast);
    // console.log("head", head);
    fast.next = head;
    let newHead = slow.next;
    slow.next = null;

    return newHead;
}

// let l1 = arrayToLL([1, 2, 3, 4, 5]);
// console.log(JSON.stringify(rotateRight(l1, 12)));


let l1 = arrayToLL([]);
console.log(JSON.stringify(rotateRight(l1, 0)));


