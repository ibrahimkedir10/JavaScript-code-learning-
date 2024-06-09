/*
Is Anagram
Solved 
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
Constraints:

s and t consist of lowercase English letters.

*/

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /* brute force :
        //check if strings are the same length.
        if(s.length != t.length){
            return false;
        }
        // sort arrays 
        s = s.split("").sort().join("");
        t = t.split("").sort().join("");
        //neasted for loop to check if s contains t[i]
        for(let i = 0 ; i < s.length ; i++){
                if(s[i] !== t[i]){
                    return false; 
                }         
        } 
        return true;
        */
        
        // approch 2 no loop
        // time complexity: O(n log n)
        //space complexity: 0(n)

        s = s.split("").sort().join("");
        t = t.split("").sort().join("");
        if(s === t){
             return true; 
        }
        else{
            return false;
        }         
    }
}
