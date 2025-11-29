export class Node {
    constructor(val, next = null) {
        this.value = val;
        this.next = next;
    }
}

export function createLinkedList(arr) {
    let newNode = new Node(0);
    let current = newNode;
    for (let num of arr) {
        current.next = new Node(num);
        current = current.next;
    }
    return newNode.next;
}

export function printLinkedList(head) {
    let current = head;
    let values = [];
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values);
}