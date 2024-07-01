/*
Permutation String
You are given two strings s1 and s2.

Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

Both strings only contain lowercase letters.

Example 1:

Input: s1 = "abc", s2 = "lecabee"

Output: true
Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

Example 2:

Input: s1 = "abc", s2 = "lecaabee"

Output: false
*/

function checkInclusion(s1, s2) {
    // Create frequency map for s1
    let s1map = new Map();
    for (let char of s1) {
        s1map.set(char, (s1map.get(char) || 0) + 1);
    }
    
    let left = 0;
    let slideingWindow = new Map();

    for (let right = 0; right < s2.length; right++) {
        // Add current character to the sliding window
        let charRight = s2[right];
        slideingWindow.set(charRight, (slideingWindow.get(charRight) || 0) + 1);

        // Ensure the sliding window has at most s1.length elements
        if (right - left + 1 > s1.length) {
            let charLeft = s2[left];
            if (slideingWindow.get(charLeft) === 1) {
                slideingWindow.delete(charLeft);
            } else {
                slideingWindow.set(charLeft, slideingWindow.get(charLeft) - 1);
            }
            left++;
        }

        // Compare maps when the window size matches s1's length
        if (right - left + 1 === s1.length) {
            if (isPermutation(s1map, slideingWindow)) {
                return true;
            }
        }
    }
    return false;
}

// Helper function to check if two maps are equal
function isPermutation(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false;
        }
    }
    return true;
}

console.log(checkInclusion("abc", "lecaacbe")); // Output: true
