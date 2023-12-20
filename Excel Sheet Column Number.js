/*Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnTitle = "A"
Output: 1
Example 2:

Input: columnTitle = "AB"
Output: 28
Example 3:

Input: columnTitle = "ZY"
Output: 701
*/

/*
// LETTERS  => NUMBERS:
// corospong each letter with a number
//- possible problems: when letters are large-> infinit (take too long to type each possible pair)
var convertToTitle = function(columnNumber) {

    
    // create a varable to hold result Number : resultNum
    let resultNum = 0;
    // find out low many letters / columNumber.length  there are ex: _ or _ _ or _ _ _ ...
    for(let i = 0; i < columnNumber.length ; i++){
        // varable to convert and store letter to number : letterVal
        const letterVal = (columnNumber.charCodeAt(i) - "A".charCodeAt(0) +1) ;
        resultNum = resultNum * 26 + letterVal;
      
    }
   
    return resultNum


};

console.log(convertToTitle("AB"));
*/


//NUMBERS TO LETTERS 
var convertToTitle = function(columnNumber) {
    // create varable to hold output sting 
    let results = "";
    
    // create a forloop that goes through the  number length 
    for(let i = 0; i< columnNumber ; i++){
        // varable to hold coverted value:
        const convert = columnNumber.charCodeAT
    }
};

    convertToTitle(10);
