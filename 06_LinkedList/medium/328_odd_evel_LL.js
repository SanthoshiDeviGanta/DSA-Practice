// let head = {
//     val: 1,
//     next: {
//         val: 2,
//         next: {
//             val: 3,
//             next: {
//                 val: 4,
//                 next: {
//                     val: 5,
//                     next: {
//                         val: 6,
//                         next: null
//                     }
//                 }
//             }
//         }
//     }
// }
// 1,2,3,4,5,6
// 1,3,5,2,4,6

let head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

function oddEvenList(head) {
    let odd = head;
    let even = head.next;
    let evenStart = even;

    while (odd.next && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;

        odd = odd.next;
        even = even.next;
    }
    console.log("odd", JSON.stringify(odd));
    odd.next = evenStart;
    console.log("even", JSON.stringify(evenStart));

    return head;

}


console.log(JSON.stringify(oddEvenList(head)));;
