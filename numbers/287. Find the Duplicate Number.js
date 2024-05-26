/*Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [3,3,3,3,3]
Output: 3 
*/

var findDuplicate = function(nums) {
    /* brute force approach:
            time complexity = O(n^2): 
            space complexity = 0(1):
   
           for(let i = 0; i < nums.length ; i++){
               for(let j = i+1; j < nums.length ; j++){
                   if(nums[i] === nums[j]){
                       return nums[i];
                   }
               }
           }
           return null;
       
       */
   
       /* approch 2 :
       time complexity = 0(n log n);
       space complexity: 0(n)
   
           nums.sort(); //  time complexity = 0(n log n) | space complexity: 0(n)
           console.log(nums);
           for(let i = 0; i < nums.length ; i ++){ //time complexity = 0(n) | space complexity: 0(1)
               if(nums[i] === nums[i+1]){
                   return nums[i];
               }
               else{
                   i++;
               }
           }
           return null;
       */
   
       // approch 3:
       // time complexity: O(n)
       // space complexity: O(n)
   
           const numSet = new Set();
           for(let i = 0; i< nums.length ; i++){
               if(numSet.has(nums[i])){
                   return nums[i];
               }
               else{
                   numSet.add(nums[i]);
               }
           }
           return null ;
       }
   
   
   