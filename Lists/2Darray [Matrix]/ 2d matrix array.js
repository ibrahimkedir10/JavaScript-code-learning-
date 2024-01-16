function matrix() {
    const nums = [
        [1, 2, 3],
        [5, 6, 7],
        [9, 10, 11]
    ];

    const target = 7;

    for (let r = 0; r < nums.length; r++) {
        for (let c = 0; c < nums[r].length; c++) {
            if (nums[r][c] === target) {
                return [r, c];
            }
        }
    }

    return -1;
}

console.log(matrix()); // Call the function with no arguments


// o(N^2)