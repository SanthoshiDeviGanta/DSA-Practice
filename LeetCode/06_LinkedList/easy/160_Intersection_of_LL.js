import { createLinkedList } from "../0_LL.js";

const arr1 = ["a1", "a2", "c1", "c2", "c3"];
const head1 = createLinkedList(arr1);

const arr2 = ["b1", "b2", "b3", "b4", "c1", "c2", "c3"];
const head2 = createLinkedList(arr2);

const arr3 = ["a1", "a2", "a3", "a4", "c1", "c2", "c3"];
const head3 = createLinkedList(arr3);

const arr4 = ["b1", "b2", "c1", "c2", "c3"];
const head4 = createLinkedList(arr4);

// Using Set
function intersectionOfLLUsingSet(headA, headB) {
  let nodeSet = new Set();

  while (headA) {
    // For Vs code purpose
    nodeSet.add(JSON.stringify(headA));
    // nodeSet.add(headA); // for real LL
    headA = headA.next;
  }

  //   console.log("nodeSet", nodeSet);

  while (headB) {
    // console.log("headB", headB);
    // For Vs code purpose
    if (nodeSet.has(JSON.stringify(headB))) {
      // if (nodeSet.has(headB)) { // for real LL
      return headB;
    }
    headB = headB.next;
  }
}

// console.log(intersectionOfLLUsingSet(head1, head2));

// Using Two pointers in detail

function intersectionOfLLUsingDetailedPointers(headA, headB) {
  // calculating the length of LL head A
  let headASize = 0;
  let pA = headA;
  while (pA) {
    headASize++;
    pA = pA.next;
  }
  //   console.log("headASize", headASize);

  //   Calculating the length of Head B
  let headBSize = 0;
  let pB = headB;
  while (pB) {
    headBSize++;
    pB = pB.next;
  }
  //   console.log("headBSize", headBSize);

  // Interchanging the LL for first list to be small (if it's big)
  if (headASize > headBSize) {
    [headA, headB] = [headB, headA];
  }
  //   console.log("headA", headA);
  //   console.log("headB", headB);

  //   Now LL-A is small and LL-B will be Big
  //   marking the 2 pointers to same level -- so pointing the pointer of headB to similar length of head A
  let diff = Math.abs(headASize - headBSize);
  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }
  //   console.log("headA", headA);
  //   console.log("headB", headB);
  //    Now two pointers are same length of same size
  pA = headA;
  pB = headB;
  // while (pA !== pB) { // In real LL
  // For Vs code
  while (JSON.stringify(pA) !== JSON.stringify(pB)) {
    pA = pA.next;
    pB = pB.next;
  }

  return pA;
}

// console.log(intersectionOfLLUsingDetailedPointers(head3, head4));

function intersectionOfLLUsingPointers(headA, headB) {
  let pA = headA;
  let pB = headB;

  //   In real LL
  //   while (pA !== pB) {
  //     pA = pA ? pA.next : headB;
  //     pB = pB ? pB.next : headA;
  //   }

  //    For Vs code
  while (JSON.stringify(pA) !== JSON.stringify(pB)) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
    // console.log("pA", pA);
  }

  return pA;
}

console.log(intersectionOfLLUsingPointers(head3, head4));
