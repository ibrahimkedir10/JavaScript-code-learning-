/*
Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.
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


var isPalindrome = function(head) {

 const middle = function(){
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
   
    console.log(slow);
}

    // revse it 

     
    middle();
}

isPalindrome(a)