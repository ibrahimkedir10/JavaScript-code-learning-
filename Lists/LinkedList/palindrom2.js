class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Create the first sorted linked list: list1
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(2);
const d = new ListNode(1);




a.next = b;
b.next = c;
c.next = d;



var isPalindrome = function(head) {
   let firstList = [];
   let secondList = [];

   while(head){
    firstList.push(head.val);
    head = head.next;
   }

   secondList = [...firstList]; // create a copy of the firstList
   secondList.reverse();

   console.log(firstList);
   console.log(secondList);

   if(JSON.stringify(firstList) === JSON.stringify(secondList)){
    console.log(true);
    return true;
   }
   else{
    console.log(false);
    return false;
   }
}

isPalindrome(a);
