/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

}

const a = new Node(1);
const b = new Node(5);
const c = new Node(3);
const d = new Node(2);
const e = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

var middleNode = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
          
    }
    console.log(slow);
};

middleNode(a);