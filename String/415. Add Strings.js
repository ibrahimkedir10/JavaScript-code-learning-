/*
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
 */
var addStrings = function(num1, num2) {

    const num1array = num1.split('').map(Number);
    const num2array = num2.split('').map(Number);
    let carry = 0;
    let sum = '';

    for (let i = num1array.length - 1, j = num2array.length - 1; i >= 0 || j >= 0 || carry >0; i--, j--) {
        let digitSum = (i >= 0 ? num1array[i] : 0) + (j >= 0 ? num2array[j] : 0) + carry;
        carry = Math.floor(digitSum / 10);
        sum = (digitSum % 10) + sum;
    }

    console.log((sum));
};

addStrings('11', '123');