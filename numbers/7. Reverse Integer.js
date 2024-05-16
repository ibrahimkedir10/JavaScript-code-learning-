/*7. Reverse Integer
Solved
Medium
Topics
Companies
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
*/
var reverse = function(x) {
    // Turn num into string
    let stringX = x.toString();
    // Reverse the string and then join it back to a string
    stringX = stringX.split("").reverse().join("");
    // Convert the reversed string back to an integer
    let result = parseInt(stringX);
    // Handle negative numbers
    if (x < 0) {
        result = -result;
    }
    
    // Check if the result is outside the 32-bit signed integer range
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
        return 0;
    }
    
    return result;
};
