/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0

SUDO CODE + notes:
* keep adding until math.floor = 0 
* keep spiting numbers using splice 

// var newSum
function addDigits(num){
    while(math.floor(num)>0) // while math.floor(num / 10) > 0
    //divide number into single digits 
    // add single digits into newSum
    // assign num = newSum
}
return num // return single num; 


}
*/

var addDigits = function(num) {
    let newSum = 0;
    let whole =0;
    let remainder =0
    
    while(num > 10){
        whole = Math.floor(num /10 );
        remainder = num % 10;
        num = whole + remainder;
    }

    console.log("whole" + whole);
    console.log("remainder" +remainder);
    console.log("newsum" + num);
 

};

addDigits(38);