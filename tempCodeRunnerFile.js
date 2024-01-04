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