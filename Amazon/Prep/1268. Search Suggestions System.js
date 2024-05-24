/*You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return a list of lists of the suggested products after each character of searchWord is typed.

 

Example 1:

Input: 
products = ["mobile","mouse","moneypot","monitor","mousepad"]
searchWord = "mouse"

Output: 
[["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]]

Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
After typing mou, mous and mouse the system suggests ["mouse","mousepad"].
Example 2:
Input:
products = ["havana"],
searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]

Explanation: The only word "havana" will be always suggested while typing the search word.
*/

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    
    products.sort();
    let currentOutput = [];
    let finalOutput = []; 
    
    // Loop through searchWord 1 character at a time
    for(let i = 0; i < searchWord.length; i++){
        let prefix = searchWord.substring(0, i + 1);
        let searchWordCharacter = searchWord[i];
       
        
        // Loop through product list  
        for(let j = 0; j < products.length; j++){
            let productWords = products[j];
     
                if(searchWordCharacter === productWords[i] && products[j].startsWith(prefix) && currentOutput.length < 3){
                 currentOutput.push(productWords); 
                }
              
               
        }
        finalOutput.push(currentOutput);
        currentOutput=[];
    }
    console.log(finalOutput);
};

// Correct function call
suggestedProducts(["havana"], "tatiana");
suggestedProducts((["mobile","mouse","moneypot","monitor","mousepad"]),("mouse"));
