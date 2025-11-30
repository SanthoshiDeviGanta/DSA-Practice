export class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

export function createLinkedList(arr) {
    if (!arr.length) return null;
    let head = new Node(arr[0]);
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }
    return head;
}

export function toArray(head) {
    let arr = [];
    let curr = head;
    let limit = 100;        // avoid infinite loops
    while (curr && limit--) {
        arr.push(curr.val);
        curr = curr.next;
    }
    return arr;
}

export function printLinkedList(head) {
    console.log(toArray(head).join(" → "));
}


export function createCycle(head, pos) {
    if (pos === -1) return head;

    // let curr = head;
    // let cycleNode = null;
    // let index = 0;

    // while (curr.next !== null) {
    //     if (index === pos) cycleNode = curr;
    //     curr = curr.next;
    //     index++;
    // }
    // curr.next = cycleNode;

    // return head;

    let nodes = head.map(v => new Node(v));

    for (let i = 0; i < nodes.length - 1; i++) {
        curr = nodes.next;
        nodes[i].next = nodes[i + 1];
    }

    nodes.next = nodes[pos];
    return head;
}