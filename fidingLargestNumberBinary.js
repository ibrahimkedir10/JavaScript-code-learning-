function LargestNum(nums, largest) {
     nums = [0, 7, 4, 3, 2, 2, 8, 1, 0];
     nums.sort();
     largest = -1;

    // binary search
    let right = nums.length - 1;
    let left = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        console.log(left,mid,right)

        // Check the right side for a larger number
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        }
        // Check the left side for a larger number
        else if (nums[mid] < nums[mid -1]) {
            right = mid - 1;
        } else {
            largest = mid;
            break;
        }
    }

    return largest;
}

console.log(LargestNum());
