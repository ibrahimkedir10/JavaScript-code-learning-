class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
/*
const Recursion = function (head) {
    // base case:
    if (head == null || head.next == null) {
        return head;
    }

    let newNode = Recursion(head.next);

    head.next.next = head;
    head.next = null;

    console.log(newNode);
    return newNode;
}
Recursion(a);

Recursion(a);
*/
const iteratively = function(head){
    let current = head;
    let prev = null;
    let next = null;

    while(current !== null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    console.log(prev);
    return prev;
}

iteratively(a);
