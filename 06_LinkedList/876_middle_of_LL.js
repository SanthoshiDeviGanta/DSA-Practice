import { createLinkedList, printLinkedList } from "./0_LL.js";

var middleNode = function (head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

// const arr = [1, 2, 3, 4, 5, 6];
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const head = createLinkedList(arr);
printLinkedList(middleNode(head));
