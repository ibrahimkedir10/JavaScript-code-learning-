/*
Given the head of a singly linked list and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:

Input: head = [5], left = 1, right = 1
Output: [5
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
f1.next = null;



var reverseBetween = function(head, left, right) {

    if (left === right){
        return head;
    }
    let prev = null;
    let current = head;
    let next = null;

    for(let i = 0; i < left - 1 ; i++){
        prev = current;
        current = current.next;
    }


    let last = prev;
    let newend = current;

    for(let i = 0; i < right- left +1 ;i++){
        next = current.next
        current.next = prev;
        prev = current;
        current = next;
        if(next != null ){
            next = next.next;
        }
    }
    if(last != null){
        last.next = prev;
    }else{
        head = prev;
    }
    newend.next = current;

    console.log(head);
    return head;

    


};
reverseBetween(a1,2,5);