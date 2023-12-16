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

var majorityElement = function(nums) {
    //base case
    if(nums.lenth == 1){
        return nums;
    }
    
    const numsMap = new Map();

    for(let i = 1; i < nums.length ; i++)
    {
        const 
    }
};

majorityElement([1,2,3,4,4,4,5,2,5])