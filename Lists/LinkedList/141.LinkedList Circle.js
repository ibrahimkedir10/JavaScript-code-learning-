/*Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

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

1. Apply fast / slow method : 
2. create varables two varables: one, being fast and moves thorugh linked list at a faster rate, two moving through array at a slower rate:
3. if slow and fast ever match that means the linked list is a circle, if not it means one of them is = null and the linked list is not a circle.
*/
var hasCycle = function(head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            console.log("true");
            return true;
        }
    }

    console.log("false");
    return false;

};

hasCycle(a1);


// --------find length of circle-----------

var LengthOfCycle = function(head) {
    let fast = head;
    let slow = head;

    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        
        if(fast == slow){
            let temp = slow;
            let length = 0;
            do{
                temp = temp.next
                length++;
            }while (temp != slow)
            console.log(length);
            return length;
        }
    }
    console.log(0);
    return 0;
    
};

LengthOfCycle(a1);