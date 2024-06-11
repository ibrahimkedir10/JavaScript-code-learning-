/*Is Palindrome
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true
Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

Example 2:

Input: s = "tab a cat"

Output: false
Explanation: "tabacat" is not a palindrome.

*/


function isPalindrome(s) {
    let cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
   
   const palindrome = cleanedString.split('').reverse().join('');

   return cleanedString === palindrome;
   }

