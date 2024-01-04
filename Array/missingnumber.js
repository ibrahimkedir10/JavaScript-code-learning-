var missingNumber = function(nums) {
    
    // base case 
    if(!nums){
      return 0 
    }
     // Create a new array with the expected list
   let nums2 = [];
   for (let i = 0; i <= nums.length; i++) {
    nums2[i] = i;
}
console.log(nums);   
console.log(nums2);
// Find the missing number
// Find the missing number using a regular for loop
for (let i = 0; i < nums2.length; i++) {
    if (!nums.includes(nums2[i])) {
        return nums2[i];
    }
}
};

let nums = [0, 1, 3, 4, 5];
let result = missingNumber(nums);
console.log(result);