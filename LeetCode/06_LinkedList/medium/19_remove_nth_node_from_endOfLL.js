// 2 pass approach with for  loop
// function removeNthFromEnd(head, n) {
//     let sentinel = { val: 0, next: null }
//     sentinel.next = head;
//     let size = 0;
//     while (head) {
//         size++;
//         head = head.next;
//     }

//     let prev = sentinel;
//     let deleteIndex = size - n;

//     for (let i = 0; i < deleteIndex; i++) {
//         prev = prev.next;
//     }
//     prev.next = prev.next.next;

//     return sentinel.next;
// }


// 2 pass approach with while  loop
// function removeNthFromEnd(head, n) {
//     let sentinel = { val: 0, next: null }
//     sentinel.next = head;
//     let size = 0;
//     while (head) {
//         size++;
//         head = head.next;
//     }
//     console.log("head size", size);

//     let prev = sentinel;

//     let deleteIndex = size - n;
//     let index = 0;
//     console.log("deleteIndex", deleteIndex);

//     while (index <= deleteIndex) {
//         if (index !== deleteIndex) {
//             index++;
//             prev = prev.next;
//         } else {
//             prev.next = prev.next.next;
//             break;
//         }
//     }


//     return sentinel.next;
// }


// 1 pass approach
function removeNthFromEnd(head, n) {
    let sentinel = {
        val: 0,
        next: null
    }
    sentinel.next = head;

    let fast = sentinel;
    let slow = sentinel;

    console.log("------------");
    console.log("fast", JSON.stringify(fast));
    console.log("slow", JSON.stringify(slow));
    console.log("sentinel", JSON.stringify(sentinel));


    for (let i = 0; i < n + 1; i++) {
        fast = fast.next;
    }
    console.log("------------");
    console.log("fast", JSON.stringify(fast));
    console.log("sentinel", JSON.stringify(sentinel));
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    console.log("------------");
    // console.log("head", JSON.stringify(head));
    console.log("fast", JSON.stringify(fast));
    console.log("slow", JSON.stringify(slow));
    console.log("sentinel", JSON.stringify(sentinel));
    console.log("------------");
    return sentinel.next;
}


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


console.log(JSON.stringify(removeNthFromEnd(head, 2)));

// let head1 = {
//     val: 1,
//     next: null
// }
// console.log(JSON.stringify(removeNthFromEnd(head1, 1)));



// let head2 = {
//     val: 1,
//     next: {
//         val: 2,
//         next: null
//     }
// }
// console.log(JSON.stringify(removeNthFromEnd(head2, 1)));
