/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

notes: 1.base case: 
- if list 1 = null return list 2
If list 2= null return list 1
if both lists = null return list 1
2. if list 1. head < list 2.head: list 
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
const c1 = new ListNode(4);

a1.next = b1;
b1.next = c1;

// Create the second sorted linked list: list2
const a2 = new ListNode(1);
const b2 = new ListNode(3);
const c2 = new ListNode(4);


a2.next = b2;
b2.next = c2;

var mergeTwoLists = function(list1, list2) {
    // Check for empty lists
     if (!list1) return list2;
     if (!list2) return list1;
 
     let dummyHead = new ListNode();  // Assuming you have a ListNode class
 
     let current = dummyHead;
 
     while (list1 !== null && list2 !== null) {
         if (list1.val < list2.val) {
             current.next = list1;
             list1 = list1.next;
         } else {
             current.next = list2;
             list2 = list2.next;
         }
         current = current.next;
     }
 
     // Check if there are remaining nodes in list1 or list2
     if (list1 !== null) {
         current.next = list1;
     }
 
     if (list2 !== null) {
         current.next = list2;
     }
 
     console.log(dummyHead.next);
     return dummyHead.next;
 }
 mergeTwoLists(a1,a2);