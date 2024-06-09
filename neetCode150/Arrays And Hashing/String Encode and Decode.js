const { encode } = require("punycode");

/*
String Encode and Decode
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"] 
*/

function testencode(strs) {
    let encodedStr = "";
    for (let i = 0; i < strs.length; i++) {
        encodedStr += `${strs[i].length}#${strs[i]}`;
    }
    console.log(encodedStr);
  
}

testencode(["neet", "code", "love", "you"]);