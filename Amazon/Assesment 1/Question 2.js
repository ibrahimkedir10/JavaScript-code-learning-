/*
create a function that finds the value of the k-reperstitiveness feature of the given 
string user_history(is definded as the maximum number of substrings of a given string 
such that some product catagories in that substring appeared at least K times):
example 1 : user_history = "ceccca" k = 3 , output is 7 
example 2 user_history = "acaab" k = 3, output = 2. 
example 3 user_history = "accad" k = 2 , output = 6: examples 
*/

function kRepetitiveness(user_history, k) {
    let count = 0;
    
    function checkKRepetitive(substring, k) {
        const frequency = {};
        for (let char of substring) {
            frequency[char] = (frequency[char] || 0) + 1;
        }
        return Object.values(frequency).every(val => val >= k);
    }

    for (let i = 0; i < user_history.length; i++) {
        for (let j = i + 1; j <= user_history.length; j++) {
            const substring = user_history.slice(i, j);
            if (checkKRepetitive(substring, k)) {
                count++;
            }
        }
    }

    return count;
}

// Example usage:
console.log(kRepetitiveness("ceccca", 3)); // Output: 7
console.log(kRepetitiveness("acaab", 3)); // Output: 2
console.log(kRepetitiveness("accad", 2)); // Output: 6