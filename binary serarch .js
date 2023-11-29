function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            console.log("Found at index:", mid);
            return mid; // Found the target; return its index
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }

    console.log("Target not found");
    return -1; // Target not found
}

const arr = [1, 3, 5, 7, 9, 12, 16, 20, 35, 40, 44];
const target = 100;

console.log(binarySearch(arr, target));
console.log("hello");
