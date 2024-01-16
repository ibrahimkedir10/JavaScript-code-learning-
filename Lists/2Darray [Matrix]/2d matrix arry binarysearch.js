// step 1 . check if matrix is sorted 
/*[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]
*/

// target = 7

function Binary2DArray() {
    const nums = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ];

    const target = 7;
    const numRows = nums.length;
    const numCols = nums[0].length;
    let row = 0;
    let col = numCols - 1;

    while (row < numRows && col >= 0) {
        const currentVal = nums[row][col];

        if (currentVal === target) {
            return [row, col];
        } else if (currentVal < target) {
            row++;
        } else {
            col--;
        }
    }

    return [-1, -1];
}

console.log(Binary2DArray());





// 15p 300