// finding number in infinity array 
function binarySearch(arr, target) {
    arr = [1, 3, 5, 7, 9, 12, 16, 20, 35, 40, 44];
    target = 40
    let left = 0;
    let right = 1;
    // find range
    while (target > arr[right]) {
        console.log(left, right);
        const newleft = right + 1;
        right = right + (right - left + 1) * 2;
        left = newleft;

    }

    while (left <= right) {
       
        const mid = Math.floor((left + right) / 2);
        console.log(left, mid, right);
        if (arr[mid] === target) {
            console.log("find");
            return mid; // Found the target; return its index
        } else if (arr[mid] < target) {
            console.log("+1");
            left = mid + 1; // Target is in the right half
        } else {
            console.log("-1");
            right = mid - 1; // Target is in the left half
        }
        console.log("out of loop");
    }

    return -1; // Target not found
}


console.log(binarySearch());
console.log("hello");// Output: 3 (index of 7 in the array)
