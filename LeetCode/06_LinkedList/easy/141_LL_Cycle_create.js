// ------------------------
// 1. ListNode class

// ------------------------
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// ------------------------
// 2. hasCycle function
// ------------------------
var hasCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};

// ------------------------
// 3. Create linked list
// ------------------------
// Array: [1,2,3,4,5]
let nodes = [1, 2, 3, 4, 5].map(v => new ListNode(v));
console.log("nodes", nodes);

for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
}

let head = nodes[0];

// ------------------------
// 4. Create cycle pointing to node 2
// ------------------------
// 5 → 2
nodes[4].next = nodes[1]; // Comment to Test for not cyclic
console.log(nodes);

// ------------------------
// 5. Test function
// ------------------------
console.log("Cycle exists?", hasCycle(head));
