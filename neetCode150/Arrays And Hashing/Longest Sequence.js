/*
Longest Consecutive Sequence
Solved 
Given an array of integers nums, return the length of the longest consecutive sequence of elements.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [2,20,4,10,3,4,5]

Output: 4
Explanation: The longest consecutive sequence is [2, 3, 4, 5].

Example 2:

Input: nums = [0,3,2,5,4,6,1,1]

Output: 7
/*
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    function longestConsecutive(nums) {
        nums.sort((a, b) => a - b); // Sort the array in ascending order
let count = 1; // Start count at 1 since the current element itself forms a sequence
let longest = 1; // Initialize longest to 1
if(nums.length === 0){
    return 0;
}
for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
        count++; // Increment count if current number is consecutive
    } else if (nums[i] !== nums[i - 1]) {
        // If the current number is not equal to the previous one (to handle duplicates)
        longest = Math.max(longest, count); // Update longest if count is greater
        count = 1; // Reset count
    }
}
return Math.max(longest, count);
}

