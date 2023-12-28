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

/*
//linked list iterative (repetition or looping) triaversal (visiting or accessing each element in a data structure in a specific order.) :

 const print1 = function(head){

    let current = head;
    while(current != null){
        console.log(current.val);
        current= current.next; 
    }
};
 print1(a);
*/
///////
/*
console.log ("----------------")
 // converting Linked List to Array iteratively 
 const arrayToNode1 = function (head) {
    let array= [];
    while(head !== null){
        array.push(head.val);
       return  array.concat(arrayToNode1(head.next));
        
    }
}
console.log(arrayToNode1(a));
*/
/*
//--------------------------
console.log ("-------sum---------")
 // sum of linked list Iterativley 
 const sum1 = function(head){
  let sumVal = 0;
  while(head !== null ){
    sumVal += head.val;
    head = head.next;
  }
  console.log(sumVal);

 } 
 sum1(a);
/*
 //--------------------------
console.log ("--------target--------")
// sum of linked list Iterativley 
const target1 = function(head,target){
  while(head !== null){
    if(target = head.val){
        console.log("found");
        break;
    }
    else{
        head = head.next;
    }
  }
}
target1(a,"C");
*/
/*
 //--------------------------
 console.log ("--------reverseList--------")
 // sum of linked list Iterativley 
 const reverseList = function(head){
  //head points to -> head.next points to-> head.next points to-> prev
  let prev = null;
  let current = head;
  let next = null;
  while(current !== null){
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;

  }
  return prev;
  
 }
 console.log((reverseList(a)));
*/

// ^^^^^^^^  Iteratively
//---------------------------------------------------------------------------------------
// vvvvvvvvv Recurisvly 



/*
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
*/
/*
///////
console.log ("----------------")
 // converting Linked List to Array Recursivly
 const arrayToNode2 = function (head) {
    // base case: if node is null, return empty array
    if (head === null) {
        return [];
    } else {
        const array = [head.val];
        // recursive call with the next node and concatenate the result
        return  array.concat(arrayToNode2(head.next));
        
    }
}
console.log(arrayToNode2(a));

*/

/// ----reverse recursivly -----------
const reverseRecursivly = function(head){
// create base case followed by call on itself
//base case:
let pre = null;
let current = head;
let next  = head.next 
if(head == null){
    return head;
}else
{
    next = prev;
    prev = current;
    current= current.next;
}
return prev;
}

console.log(reverseRecursivly(a));

/* a -> b-> c-> d -> e -> null
pre = null | = a | pre => current
current = a | b | current  => current.next
next = b | null | next = > null
*/