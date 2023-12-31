class Node{
        constructor(val) {
            this.val = val;
            this.next = null;
            this.prev = null; // New property for doubly linked list
        }
    }
    
    const a = new Node("A");
    const b = new Node("B");
    const c = new Node("C");
    const d = new Node("D");
    const e = new Node("E");
    
    a.next = b;
    b.prev = a;
    
    b.next = c;
    c.prev = b;
    
    c.next = d;
    d.prev = c;
    
    d.next = e;
    e.prev = d;
    
//linked list iterative (repetition or looping) triaversal (visiting or accessing each element in a data structure in a specific order.) :

const print1 = function(head){

    let current = head;
    while(current != null){
        console.log(current.val + "->");
        current= current.next; 
    }
};
 print1(a);

 const printBackward = function(tail) {
    let current = tail;
    while (current !== null) {
        console.log(current.val + "<-");
        current = current.prev;
    }
};

printBackward(e);

function reverseDoublyLinkedList(head) {
    let current = head;
    let temp = null;

    while (current !== null) {
        // Swap next and prev pointers for the current node
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;

        // Move to the next node
        current = current.prev;
    }

    // Update the head to the last node (which was the original tail)
    if (temp !== null) {
        head = temp.prev;
    }

    return head;
}