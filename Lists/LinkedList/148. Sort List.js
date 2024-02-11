/*
Given the head of a linked list, return the list after sorting it in ascending order.

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]


Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []

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
var sortedList = function(head) {
    if(!head) return null

    const nodes = [];
  
    while (head) {
      nodes.push(head);
      head = head.next;
    }
  
    nodes.sort((a, b) => a.val - b.val);
  
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].next = nodes[i + 1] || null;
    }
  
    console.log(nodes[0]);
    return nodes[0];
  };
  sortedList(a);