// greatest number after target

function binarySearch(arr, target) {
    arr = [1, 3, 5, 7, 9, 12, 16, 20, 35, 40,44];
    target = 0
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        if (target > arr.length -1 || target < arr[0]){ // if target is bigger than biggest number or lower than first number return -1
            return -1
        }
        const mid = Math.floor((left + right) / 2);
        console.log(mid,right,left);
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

    return left; // Take the next lowest number after target if target not found
}


console.log(binarySearch()); 
console.log("hello");// Output: 3 (index of 7 in the array)
