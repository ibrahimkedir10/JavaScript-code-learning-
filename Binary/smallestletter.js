// smalledt number greater than target 

function binarySearch(arr, target) {
    arr = ["c","f","j"];
    target = "d";
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
         
        const mid = Math.floor((left + right) / 2);
        console.log(mid,right,left);
        
         if (arr[mid] < target) {
            console.log("+1");
            left = mid + 1; // Target is in the right half
        } else {
            console.log("-1");
            right = mid - 1; // Target is in the left half
        }
        console.log("out of loop");
    }

    return arr[left % arr.length] ; // Target not found
}

console.log(binarySearch()); 
console.log("hello");// Output: 3 (index of 7 in the array)
