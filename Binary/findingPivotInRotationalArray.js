// given array nums AFTER the rotation return the integer target index, if not in nums return -1

function pivot(arr, target ) {
    // create example //ORG [0,1,2,4,5,6,7] // target = 0  :  NEW [4,5,6,7,8,9,10,1,2,3]  output should be 4
    
    count = 0
    left = 0;
    right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(left,mid,right)
        if (arr[mid] > arr[mid+1] && mid < right) {
            return mid;   
        }
        if(arr[mid] < arr[mid-1] && mid > left){
            return mid-1;
        }
        if(arr[mid] <= arr[left]){
            right = mid -1;
        }
        else {
            left = mid + 1
        }
                 
    }
    return -1
}

