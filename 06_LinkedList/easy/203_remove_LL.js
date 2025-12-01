var removeElements = function (head, val) {
    let sentinel = {
        val: 0,
        next: null
    }

    sentinel.next = head;
    while (sentinel && sentinel.next) {
        if (sentinel.next.val === val) {
            sentinel.next = sentinel.next.next;
        } else {
            sentinel = sentinel.next;
        }
    }
    return head;
}

// var removeElements = function (head, val) {
//     while (head && head.val === val) {
//         head = head.next;
//     }
//     let current = head;
//     while (current && current.next) {
//         if (current.next.val === val) {
//             current.next = current.next.next;
//         } else {
//             current = current.next;
//         }
//     }
//     return head;
// };

let head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 6,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: {
                            val: 6,
                            next: null
                        }
                    }
                }
            }
        }
    }
}

// let head = {
//     val: 7,
//     next: {
//         val: 7,
//         next: {
//             val: 7,
//             next: {
//                 val: 7,
//                 next: null
//             }
//         }
//     }
// }
console.log(JSON.stringify(removeElements(head, 6)));
