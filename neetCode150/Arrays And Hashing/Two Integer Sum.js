/*
Two Integer Sum
Solved 
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

Example 2:

Input: nums = [4,5,6], target = 10

Output: [0,2]
Example 3:

Input: nums = [5,5], target = 10

Output: [0,1]
Constraints:

2 <= nums.length <= 1000
-10000 <= nums[i] <= 10000
-10000 <= target <= 10000

*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /* brute force:
        //neaster for loop 
        // time complexity: O(n^2)
        // space complexity: 0(1)

        if(nums.length === 0 ){
            return [0];
        }
        for(let i = 0; i < nums.length ; i++){
            for (let j =i+1; j < nums.length; j++){
                if(nums[i] + nums[j] === target){
                    return [i,j];
                }
            }
        }
        return null;
        */

        const numsMap = new Map();
    // iterate through array
        for(let i=0 ; i< nums.length ; i ++){
           // check if hasmap contains target - nums[i] 
          const difference = target - nums[i];
          if(numsMap.has(difference)){
                return [ numsMap.get(difference), i]
          }
          numsMap.set(nums[i] , i);
        }
    }
}
