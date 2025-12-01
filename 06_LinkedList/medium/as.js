// Wrong 
// function oddEvenList(head) {
//     let odd = head;
//     let even = new ListNode();
//     let size = 0;
//     let count = 0;
//     let tempCount = 0;
//     while ((odd && odd.next) && (even && even.next)) {
//         let temp = odd.next;
//         odd.next = odd.next.next;
//         even.next = temp;
//     }

//     console.log("odd", JSON.stringify(odd));
//     console.log("even", JSON.stringify(even));
//     return head;
// }

// function oddEvenList(head) {
//     let odd = head;
//     let even = new ListNode();
//     let size = 0;
//     while (odd && odd.next) {
//         // console.log("size", size);
//         // console.log("odd", JSON.stringify(odd));
//         if (size % 2 === 0) {
//             // console.log("even", even);
//             // console.log("new ListNode(odd.next.val);", new ListNode(odd.next.val));
//             let temp = even;
//             while (temp && temp.next) {
//                 temp = temp.next;
//             }
//             temp.next = new ListNode(odd.next.val);
//             odd.next = odd.next.next;
//             size = size + 2;
//         }
//         if (odd.next === null) {
//             console.log('next', odd);
//             odd.next = even.next;
//         }
//         odd = odd.next;
//     }
//     console.log("odd", odd);
//     console.log("even", even);
//     if (odd && odd.next && odd.next.next) {
//         console.log('next', odd);
//         odd.next = even.next;
//     }

//     return head;
// }