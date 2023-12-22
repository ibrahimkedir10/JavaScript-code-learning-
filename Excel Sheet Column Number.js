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
    let result = "";

    while (columnNumber > 0) {
        // Calculate the remainder when dividing by 26
        const remainder = (columnNumber - 1) % 26;

        // Convert the remainder to a letter and append it to the result
        result = String.fromCharCode('A'.charCodeAt(0) + remainder) + result;

        // Update columnNumber to the quotient when dividing by 26
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }

    return result;
};

// Example usage:
const columnNum = 27;
const columnLetter = convertToTitle(columnNum);

console.log(`The column number ${columnNum} corresponds to the Excel column letter '${columnLetter}'.`);