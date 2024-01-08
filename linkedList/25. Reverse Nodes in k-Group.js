/*
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
k is a positive integer and is less than or equal to the length of the linked list. 
If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
You may not alter the values in the list's nodes, only nodes themselves may be changed.
*/


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Create the first sorted linked list: list1
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(3);
const e = new ListNode(2);
const f = new ListNode(1);


a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

var reverseKGroup = function(head, k) {
    current = head;
    prev = null;
    next = null;

    for(let i =0 ; i < k ; i++){
       
        if(current !== null && current.next !== null ){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        }
        current = prev.next;
    }
    console.log(prev);
};