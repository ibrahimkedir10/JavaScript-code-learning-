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
    let orgcurrent = head;
    let fast = head;
    let slow = head;
    const middle = function() {
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        console.log(slow);
    }

    middle();

    let current = slow.next;
    let next = null;
    let prev = slow;
    const reverse = function() {
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        slow.next = null; // Break the original list from the middle
    }

    reverse();

    const compare = function() {
        while (prev !== null) {
            if (prev.val === orgcurrent.val) {
                prev = prev.next;
                orgcurrent = orgcurrent.next;
            } else {
                console.log(false);
                return false;
            }
        }
        console.log(true);
        return true;
    }

    return compare();
}

isPalindrome(a);
