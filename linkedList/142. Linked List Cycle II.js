/*
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.


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

/*
notes:
1. fast and slow pointer method: if fast = slow, its a circle | else is fast = null or slow = null then it is not a circle 
2. if circle, create new node to start at
*/
var LengthOfCycle = function(head) {
    let slow = head;
    let fast = head;

    // Step 1: Check if there's a cycle using Floyd's Tortoise and Hare algorithm
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Cycle detected, move to step 2
            break;
        }
    }

    // Step 2: If there's no cycle, return null
    if (fast === null || fast.next === null) {
        return null;
    }

    // Step 3: Move one pointer to the head and keep the other at the meeting point
    slow = head;

    // Step 4: Move both pointers one step at a time until they meet at the starting node of the cycle
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    // Step 5: Return the starting node of the cycle
    console.log(slow);
    return slow;
};

LengthOfCycle(a1);