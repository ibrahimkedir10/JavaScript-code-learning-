/*
create a function the rearranges the original palindromic password, 
the result should also be palindrome and is the lexicographically smallest 
palindromic rearrangment possible. example 1:
  password = "yxxy", output should be xyyx. example 2: password "ded", output should be ded
*/

function smallestPalindrome(password) {
    const charCount = {};
    
    // Count the frequency of each character
    for (const char of password) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let oddChar = '';
    let halfStr = '';

    // Check character frequencies and build half of the palindrome
    for (const char of Object.keys(charCount).sort()) {
        const count = charCount[char];
        if (count % 2 !== 0) {
            if (oddChar) {
                // More than one odd character count means it cannot form a palindrome
                return "Cannot form a palindrome";
            }
            oddChar = char;
        }
        halfStr += char.repeat(Math.floor(count / 2));
    }

    // Construct the smallest palindrome
    const firstHalf = halfStr.split('').sort().join('');
    const secondHalf = firstHalf.split('').reverse().join('');
    return firstHalf + oddChar + secondHalf;
}

// Test cases
console.log(smallestPalindrome("yxxy")); // Outputs: "xyyx"
console.log(smallestPalindrome("ded"));  // Outputs: "ded"
