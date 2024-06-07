/*
Duplicate Integer

Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true
Example 2:

Input: nums = [1, 2, 3, 4]

Output: false
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /* brute force approach:
         time complexity = O(n^2): 
         space complexity = 0(1):

        for(let i = 0; i < nums.length ; i++){
            for(let j = i+1; j < nums.length ; j++){
                if(nums[i] === nums[j]){
                    return true;
                }
            }
        }
        return false;
    
    */

    /* approch 2 :
    time complexity = 0(n log n);
    space complexity: 0(n)

        nums.sort(); //  time complexity = 0(n log n) | space complexity: 0(n)
        console.log(nums);
        for(let i = 0; i < nums.length ; i ++){ //time complexity = 0(n) | space complexity: 0(1)
            if(nums[i] === nums[i+1]){
                return true;
            }
            else{
                i++;
            }
        }
        return false;
    */

    // approch 3:
    // time complexity: O(n)
    // space complexity: O(n)

        const numSet = new Set();
        for(let i = 0; i< nums.length ; i++){
            if(numSet.has(nums[i])){
                return true;
            }
            else{
                numSet.add(nums[i]);
            }
        }
        return false ;
    }
}

