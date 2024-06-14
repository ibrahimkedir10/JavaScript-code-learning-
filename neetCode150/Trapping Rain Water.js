/*
Trapping Rain Water
Solved 
You are given an array non-negative integers heights which represent an elevation map. Each value heights[i] represents the height of a bar, which has a width of 1.

Return the maximum area of water that can be trapped between the bars.

Example 1:



Input: height = [0,2,0,3,1,0,1,3,2,1]

Output: 9 
*/

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
       let water = 0;
    const n = height.length;

    if (n <= 2) return 0; // There must be at least 3 blocks to trap water

    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);

    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    for (let i = 0; i < n; i++) {
        water += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return water;
}
}


