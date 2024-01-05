/*
Given the head of a linked list, return the list after sorting it in ascending order.
*/


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Create the first sorted linked list: list1
const a1 = new ListNode(1);
const b1 = new ListNode(2);
const c1 = new ListNode(3);
const d1 = new ListNode(4);
const e1 = new ListNode(5);
const f1 = new ListNode(6);


a1.next = b1;
b1.next = c1;
c1.next = d1;
d1.next = e1;
e1.next = f1;
f1.next = c1;

var sortList = function(head) {
   
};