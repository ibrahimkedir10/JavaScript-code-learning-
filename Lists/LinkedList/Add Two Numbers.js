/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Create the first sorted linked list: list1
const a1 = new ListNode(4);
const b1 = new ListNode(7);
const c1 = new ListNode(1);

a1.next = b1;
b1.next = c1;

// Create the second sorted linked list: list2
const a2 = new ListNode(4);
const b2 = new ListNode(5);
const c2 = new ListNode(4);


a2.next = b2;
b2.next = c2;

var addTwoNumbers = function(l1, l2) {
    //create new node:
    let newNode = new ListNode();
    let current = newNode;
    let carry = 0;
    let sum = 0;



    while(l1 !== null || l2 !== null  || carry !== 0 ){
       
        sum = l1.val + l2.val + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next
        
        if(l1){
            l1 = l1.next;
        }
        if(l2){
            l2 = l2.next;
        }
    }

    if(carry > 0){
        current.next = carry;
    }
    
    console.log(newNode);
}

addTwoNumbers(a1,a2);