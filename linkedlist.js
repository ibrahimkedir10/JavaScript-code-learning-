class Node{
    constructor(val){
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

//linked list iterative (repetition or looping) triaversal (visiting or accessing each element in a data structure in a specific order.) :

 const print1 = function(head){

    let current = head;
    while(current != null){
        console.log(current.val);
        current= current.next; 
    }
};
 print1(a);

 
///////
console.log ("----------------")
 // recursivly (includes a base case and calls itself in order to solve a problem) triaversal (visiting or accessing each element in a data structure in a specific order.) :

 const print2 =function (head){
    
    if(head === null)
    {
        return; 
    }
    else
    {
        console.log(head.val);
        print2(head.next);
    }
 }
 print2(a);