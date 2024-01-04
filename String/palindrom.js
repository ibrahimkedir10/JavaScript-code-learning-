/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters
 include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.*/

/**
 * @param {string} s
 * @return {boolean}
 */


var isPalindrome = function(s) {
    // Convert to lowercase and remove non-letter characters
     var cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const palindrome = cleanedString.split('').reverse().join('');

    return cleanedString === palindrome;
    
    
    
};

// Example usage
isPalindrome("a!abcdDCBA !a22 ");