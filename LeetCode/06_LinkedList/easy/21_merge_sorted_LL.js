import { arrayToLL, ListNode } from "../0_LL.js";


function mergeTwoLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    let start = new ListNode();
    let current = start;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 === null && list2) {
        current.next = list2;
    }
    if (list2 === null && list1) {
        current.next = list1;
    }

    return start.next;
}


// let temp = list1.next;
// list1.next = 

let l1 = arrayToLL([2, 5, 7, 8])
let l2 = arrayToLL([1, 3, 4, 6, 9, 11])

// let l1 = arrayToLL([1, 2, 4])
// let l2 = arrayToLL([2, 3, 4])

console.log(JSON.stringify(mergeTwoLists(l1, l2)));
