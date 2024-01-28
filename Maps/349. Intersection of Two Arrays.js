/**
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 */
var intersection = function(nums1, nums2) {
   /* brute force: 
    const newArray = [];
    for(const i of nums1){
        for(const j of nums2){
            if(i === j && !newArray.includes(i)){
                newArray.push(i);
            }
        }
    }

    return newArray;
    console.log(newArray);
*/
// using sets 


// Find the intersection using Set's built-in methods
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    const intersectionArray = Array.from(set1).filter(function(num) {
        return set2.has(num);
    });
    
    return intersectionArray;
};




intersection([1,2,3,4],[1,5,7,2]);