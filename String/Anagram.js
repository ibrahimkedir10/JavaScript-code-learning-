/*
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

var isAnagram = function(s, t) {
    
    // brute force :
    // if stings dont have the same length return false;
    // Sort both strings
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    // Check if the sorted strings are equal
    if (sortedS === sortedT) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
};


isAnagram("hello","ehlol")