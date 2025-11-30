// let head = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 2,
//                 next: {
//                     value: 1,
//                     next: null
//                 }
//             }
//         }
//     }
// }

// let head = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 5,
//                 next: {
//                     value: 1,
//                     next: null
//                 }
//             }
//         }
//     }
// }

let head = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 3,
                next: {
                    value: 2,
                    next: {
                        value: 1,
                        next: null
                    }
                }
            }
        }
    }
}


// function isPalindrome(head) {
//     // To find the Mid of the Linked List
//     let slow = fast = head;
//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     // Reverse the second part of the Linked List
//     let prev = null;
//     while (slow) {
//         let temp = slow.next;
//         slow.next = prev;
//         prev = slow;
//         slow = temp;
//     }

//     // Check palindrome or not
//     let firstList = head;
//     let secondList = prev;
//     console.log("firstList", firstList, firstList.value);
//     console.log("secondList", secondList);


//     while (secondList) {
//         if (firstList.value !== secondList.value) {
//             return false;
//         }
//         firstList = firstList.next;
//         secondList = secondList.next;
//     }
//     return true;
// }

var isPalindrome = function (head) {
    let a = '', b = '';

    while (head) {
        a = a + head.value;
        b = head.value + b;
        head = head.next;
    }

    return a === b;
};

console.log("head", head);

console.log(isPalindrome(head));