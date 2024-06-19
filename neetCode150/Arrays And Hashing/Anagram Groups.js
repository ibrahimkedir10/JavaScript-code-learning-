/*Anagram Groups
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]

*/

// time complexity O(log n) 
// space complexity O(n)
 function groupAnagrams(strs) {
      
   const map = new Map();

   for(let i = 0 ; i < strs.length ; i++){
        let sorted = strs[i].split("").sort().join("");
    if(!map.has(sorted)){
        map.set(sorted, [strs[i]]);
    }
    else{
        map.get(sorted).push(strs[i]);
    }
   }
   return Array.from(map.values());
}