function findSEP(nums, target) {
    // Create left and right variables
    let left = 0;
    let right = nums.length - 1;
    const result = [-1, -1];
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        // Set the result based on the target
        result[0] = mid;
        result[1] = mid;
  
        // Expand the result to the left
        let leftIdx = mid;
        while (leftIdx > 0 && nums[leftIdx - 1] === target) {
          leftIdx--;
          result[0] = leftIdx;
        }
  
        // Expand the result to the right
        let rightIdx = mid;
        while (rightIdx < nums.length - 1 && nums[rightIdx + 1] === target) {
          rightIdx++;
          result[1] = rightIdx;
        }
  
        return result;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
  console.log(findSEP([5, 7, 7, 8, 8,8,8, 10], 8)); // Output: [3, 4]
  