/*
Longest Substring Without Duplicates
Solved 
Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = "zxyzxyz"

Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.

Example 2:

Input: s = "xxxx"

Output: 1
*/

function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left =0;
    let right =0;
    let result = 0;

    while(right < s.length){
        if(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }
        else{
            set.add(s[right]);
            right++;
            result = Math.max(result, set.size);
        }
    }
    return result;
}