/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
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
const a1 = new ListNode(1);
const b1 = new ListNode(2);
const c1 = new ListNode(3);
const d1 = new ListNode(4);

a1.next = b1;
b1.next = c1;
c1.next = d1;

// Create the second sorted linked list: list2
const a2 = new ListNode(3);
const b2 = new ListNode(8);
const c2 = new ListNode(5);



a2.next = b2;
b2.next = c2;

var addTwoNumbers = function(l1, l2) {
    //base case:

    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let value1 = l1 !== null ? l1.val : 0;
        let value2 = l2 !== null ? l2.val : 0;

        let sum = value1 + value2 + carry;
        carry = Math.floor(sum / 10);

        // Create a new node for the result list
        current.next = new ListNode(sum % 10);
        current = current.next;

        // Move to the next nodes in the input lists if they exist
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // The dummy node's next points to the head of the result list
    console.log(dummy.next);
    return dummy.next;

};
addTwoNumbers(a1,a2);