/*
Given the head of a sorted linked list, 
delete all duplicates such that each element appears only once. 
Return the linked list sorted as well.

notes:

1. Check if linked list = null [return]
2.Loop through link list until head = null [end of array]
3. if head = head.next, then head.next = head.next.next 
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(1);
const c = new Node(2);
const d = new Node(3);
const e = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

var deleteDuplicates = function(head) {
   // base case 
   
   if (head === null) {
    return head;
}
let current = head;
while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
        current.next = current.next.next;
    } else {
        current = current.next;
    }
}

console.log(head);
return head;
};

deleteDuplicates(a);