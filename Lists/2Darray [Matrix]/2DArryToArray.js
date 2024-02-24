/*1D array. The N-dimensional array can have any number of nested lists and each nested list can contain any number of elements. 
The elements in the nested lists are integers. Write a function that takes an N-dimensional array as input and returns a 1D array.

Example 1:

Input:

array = [1, [2, 3], [4, [5, 6]], 7]
Output:

flatten_array(array) -> [1, 2, 3, 4, 5, 6, 7]
Example 2:

Input:

array = [[1, 2], [3, 4], [5, 6]]
Output:

flatten_array(array) -> [1, 2, 3, 4, 5, 6]
*/

function flatten_Array(twoDArray){
    let flatArray = [];

    function flatten(array) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                flatten(array[i]); // Recursively flatten nested arrays
            } else {
                flatArray.push(array[i]); // Push non-array elements into flatArray
            }
        }
    }

    flatten(twoDArray);
    
    console.log(flatArray);
}
flatten_Array([1,[2,3],[4,[5,6]],7]);