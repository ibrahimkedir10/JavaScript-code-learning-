class doubleLinkedList{
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
    
