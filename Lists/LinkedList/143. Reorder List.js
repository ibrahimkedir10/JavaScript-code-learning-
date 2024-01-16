/*
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 
Example 1:


Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:


Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
 
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
const d = new ListNode(4);
const e = new ListNode(5);
const f = new ListNode(6);


a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;


var reorderList = function(head) {
    
    // find middle 
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }


    // reverse second half of list
   
    let prev = null;
    let current = slow;
    let next = null;
    while(current !== null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    // merge the two halves
    let first = head;
    let second = prev;
    while(second.next !== null){
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }

    console.log(head);
};

reorderList(a);
