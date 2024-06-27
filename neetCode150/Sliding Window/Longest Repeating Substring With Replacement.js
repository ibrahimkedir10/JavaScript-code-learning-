/*
Longest Repeating Substring With Replacement
You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

Example 1:

Input: s = "XYYX", k = 2

Output: 4
Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

Example 2:

Input: s = "AAABABB", k = 1

Output: 5
*/
function characterReplacement(s, k) {
    let left = 0;
let maxCount = 0; // Track the maximum frequency of any character in the current window
let result = 0;
let letterFrequency = new Map();

for (let right = 0; right < s.length; right++) {
   let char = s[right];
   if (letterFrequency.has(char)) {
       letterFrequency.set(char, letterFrequency.get(char) + 1);
   } else {
       letterFrequency.set(char, 1);
   }

   // Update maxCount with the maximum frequency of any character in the current window
   maxCount = Math.max(maxCount, letterFrequency.get(char));

   // Calculate the current window size
   let windowSize = right - left + 1;

   // If the number of replacements needed exceeds k, shrink the window from the left
   if (windowSize - maxCount > k) {
       let leftChar = s[left];
       letterFrequency.set(leftChar, letterFrequency.get(leftChar) - 1);
       left++;
   }

   // Update result with the maximum valid window size found so far
   result = Math.max(result, right - left + 1);
}

return result;
}


