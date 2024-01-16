/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

// brut force :
var majorityElement = function(nums) {
    // Base case
    if (nums.length === 1) {
        return nums[0]; // Return the single element in the array
    }

    let counter = 0;
    let majority = null;

    for (let i = 0; i < nums.length; i++) {
        let currentCount = 0;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                currentCount += 1;
            }
        }

        if (currentCount > counter) {
            counter = currentCount;
            majority = nums[i];
        }
    }

    return majority;
};

console.log(majorityElement([1, 2, 3, 4, 4, 4, 5, 2, 5]));
