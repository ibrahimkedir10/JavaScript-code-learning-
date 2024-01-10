/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

var twoSum = function(nums, target) {
    // base case:
    if(!nums || nums.length < 2){
        console.log("fail 1")
        return [];
    }

    for(let i = 0; i <nums.length ; i++){
        for(let j = i +1; j< nums.length; j++){
            if(nums[i] + nums[j] === target){
                console.log([i,j]);
                  return [i, j];
            }

        }
      
    }
    console.log("fail 2");
    return [];
};
twoSum([1, 7, 3, 5, 2, 6, 10], 5);

// nums : [1,7,3,5,2,6,10]
// target : [5]