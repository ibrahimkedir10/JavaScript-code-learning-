/*Top K Elements in List
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const map = new Map();
    const output = [];

    // Count the frequency of each element in the nums array in a single loop
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    // Convert map to an array and sort by frequency in descending order
    const sortedArray = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

    // Select the top k elements
    for (let i = 0; i < k; i++) {
        output.push(sortedArray[i][0]);
    }

    return output;
}
}