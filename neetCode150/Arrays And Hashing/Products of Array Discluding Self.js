/*
Products of Array Discluding Self
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in 
𝑂
(
𝑛
)
O(n) time without using the division operation?

Example 1:

Input: nums = [1,2,4,6]

Output: [48,24,12,8]
Example 2:

Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]



// brute force : time: O(n)^2 , Spsce O(n)
function productExceptSelf(nums) {
    let output = [];
    for(let i = 0; i < nums.length; i++) {
        let saved = nums[i];
        nums.splice(i, 1); // Remove the element at index i
        let result = 1;
        for(let j = 0; j < nums.length; j++) {
            result = result * nums[j];
        }
        output.push(result);
        nums.splice(i, 0, saved); // Add the saved element back at index i
    }
    console.log(output);
}

productExceptSelf([1,2,4,6]); // expected: [48,24,12,8]
*/

//: time: O(n) , Spsce O(n)
function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);
    let prefix = 1;
    
    for (let i = 0; i < n; i++) {
        output[i] = prefix;
        prefix *= nums[i];
       
    }

    
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= suffix;
        suffix *= nums[i];
  
    }
}

console.log(productExceptSelf([1, 2, 4, 6])); // expected: [48, 24, 12, 8]
