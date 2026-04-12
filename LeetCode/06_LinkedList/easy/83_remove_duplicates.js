function deleteDuplicates(head) {
    // let current = { val: 0, next: null };
    // current.next = head;

    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
}


// let head = {
//     val: 1,
//     next: {
//         val: 1,
//         next: {
//             val: 2,
//             next: {
//                 val: 3,
//                 next: {
//                     val: 3,
//                     next: null
//                 }
//             }
//         }
//     }
// }

let head = {
    val: 0,
    next: {
        val: 0,
        next: {
            val: 0,
            next: {
                val: 0,
                next: {
                    val: 0,
                    next: null
                }
            }
        }
    }
}

console.log(JSON.stringify(deleteDuplicates(head)));
