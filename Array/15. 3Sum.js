/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

// returns true if there is triplet with sum equal
// to 'sum' present in A[]. Also, prints the triplet
var FindthreeSum = function(A,sum) {
    let l, r;
 
    /* Sort the elements */
    A.sort();
 
    /* Now fix the first element one 
    by one and find the
    other two elements */
    for (let i = 0; i < A.length - 2; i++) {
 
        // To find the other two
        // elements, start two index
        // variables from two corners of 
        // the array and move
        // them toward each other
         
        // index of the first element in the
        let l = i + 1; 
         
        // remaining elements
         
       // index of the last element
        let r = A.length - 1; 
        while (l < r) {
            if (A[i] + A[l] + A[r] == sum) 
            {
            console.log("Triplet is " + A[i] + ", "
                  + A[l] + ", " + A[r]);
                return true;
            }
            else if (A[i] + A[l] + A[r] < sum){
                l++;
            }
               
            else{
                r--;
            } 
              
        }
    }
 
    // If we reach here, then no triplet was found
    return false;
};
FindthreeSum([1,5,2,7,4,6,9], 18);

