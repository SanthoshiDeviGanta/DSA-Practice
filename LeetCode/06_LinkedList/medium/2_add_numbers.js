import { arrayToLL } from "../0_LL.js";

function ListNode(val = 0) {
    return { val, next: null }
}

function addTwoNumbers(l1, l2) {
    let sum = 0;
    let carry = 0;
    let current = 0;
    let reversedLL = new ListNode();
    let temp = reversedLL;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        sum = x + y + carry;

        current = sum % 10;
        temp.next = new ListNode(current);
        temp = temp.next;

        carry = Math.floor(sum / 10);

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    // console.log("reversedLL", JSON.stringify(reversedLL));

    return reversedLL.next;
}

// let l1 = arrayToLL([3, 4, 9]), l2 = arrayToLL([4, 8, 1, 9])
// console.log(JSON.stringify(addTwoNumbers(l1, l2)));
// // 7,2,1,0,1


let l1 = arrayToLL([3, 8, 9, 1]), l2 = arrayToLL([4, 8, 9])
console.log(JSON.stringify(addTwoNumbers(l1, l2)));
// 7,2,1,0,1

// let l1 = arrayToLL([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
// let l2 = arrayToLL([5, 6, 4])

// console.log(JSON.stringify(addTwoNumbers(l1, l2)));
