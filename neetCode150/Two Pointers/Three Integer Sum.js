/*Three Integer Sum
Solved 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let triplets = [];
        let seen = new Set();

        for (let i = 0; i < nums.length - 2; i++) {
            for (let j = i + 1; j < nums.length - 1; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        let triplet = [nums[i], nums[j], nums[k]];
                        let tripletString = triplet.toString();
                        if (!seen.has(tripletString)) {
                            triplets.push(triplet);
                            seen.add(tripletString);
                        }
                    }
                }
            }
        }

        return triplets;
    }
}

