// ============================================
// 0. ListNode Class
// ============================================
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// ============================================
// 1. Create Linked List from Array
// ============================================
function createLinkedList(arr) {
    if (!arr.length) return null;
    let head = new ListNode(arr[0]);
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return head;
}

// ============================================
// 2. Convert List to Array (for easy debugging)
// ============================================
function toArray(head) {
    let arr = [];
    let curr = head;
    let limit = 100;        // avoid infinite loops
    while (curr && limit--) {
        arr.push(curr.val);
        curr = curr.next;
    }
    return arr;
}

// ============================================
// 3. Print Linked List (safe)
// ============================================
function printList(head) {
    console.log(toArray(head).join(" → "));
}

// ============================================
// 4. Create a Cycle at position `pos`
// pos = 0-based index, pos = -1 = no cycle
// ============================================
function createCycle(head, pos) {
    if (pos === -1) return head;

    let curr = head;
    let cycleNode = null;
    let index = 0;

    while (curr.next !== null) {
        if (index === pos) cycleNode = curr;
        curr = curr.next;
        index++;
    }
    curr.next = cycleNode;

    return head;
}

// ============================================
// 5. Detect Cycle (Floyd’s Algorithm)
// ============================================
function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}

// ============================================
// 6. Find Cycle Start (Floyd’s Part 2)
// ============================================
function detectCycle(head) {
    let slow = head, fast = head;

    // Step 1: detect meeting point
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    if (!fast || !fast.next) return null;

    // Step 2: move slow to head
    slow = head;

    // Step 3: both move 1 step until meet
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;  // cycle starting node
}

// ============================================
// 7. Find Middle Node
// ============================================
function middleNode(head) {
    let slow = head,
        fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// ============================================
// 8. Reverse Linked List
// ============================================
function reverseList(head) {
    let prev = null, curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// ============================================
// 9. Merge Two Sorted Lists
// ============================================
function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(-1);
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    tail.next = l1 || l2;
    return dummy.next;
}

// ============================================
// 10. Remove Nth Node from End
// ============================================
function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0, head);
    let slow = dummy, fast = dummy;

    while (n--) fast = fast.next;
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
}

// ============================================
// 11. Check Palindrome Linked List
// ============================================
function isPalindrome(head) {
    if (!head || !head.next) return true;

    let mid = middleNode(head);
    let second = reverseList(mid);

    let p1 = head;
    let p2 = second;

    while (p2) {
        if (p1.val !== p2.val) return false;
        p1 = p1.next;
        p2 = p2.next;
    }

    return true;
}

// ============================================
// 12. Intersection of Two Linked Lists
// ============================================
function getIntersectionNode(a, b) {
    if (!a || !b) return null;

    let p1 = a, p2 = b;

    while (p1 !== p2) {
        p1 = p1 ? p1.next : b;
        p2 = p2 ? p2.next : a;
    }

    return p1;
}

// ============================================
// 13. Add Two Numbers (LeetCode #2)
// ============================================
function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }

    return dummy.next;
}
