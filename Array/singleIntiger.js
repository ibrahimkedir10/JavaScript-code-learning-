/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1

  
*/

var singleNumber = function(nums) {
    // base case : if nums.length = 1 retunr nums
    if(nums.length === 1){
        return nums;
    }
    else{   
        nums.sort();
        for(let i =0 ; i < nums.length ; i++){
            if(nums[i] == nums[i +1]){
                i++;
            }
            else{
                return nums[i];
            }
            
        }
    }
};

console.log(singleNumber([1,2,1,2,3,4,4]));

//or 

/*  
var singleNumber = function(nums) {
    let result = 0;

    for (const num of nums) {
        result ^= num;
    }

    return result;
};
Explanation:

The XOR operation (^) between two equal numbers results in 0.
XORing any number with 0 results in the number itself.
By XORing all numbers in the array, the duplicate occurrences cancel each other out, leaving only the single non-repeated number.
This approach is more efficient than sorting the array, as sorting has a time complexity of O(n log n), whereas XORing has a linear time complexity of O(n).
*/