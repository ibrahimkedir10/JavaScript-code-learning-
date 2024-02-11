/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.
 
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

var intersection = function(nums1, nums2) {
    //make sets to hold arrays
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    console.log(set1);
    console.log(set2);

    let intersection = new Set([...set1].filter(x => set2.has(x)));
    // to return array : let intersection = [...set1].filter(x => set2.has(x));
    console.log(intersection);


    

};

intersection([4,9,5],[9,4,9,8,4]);