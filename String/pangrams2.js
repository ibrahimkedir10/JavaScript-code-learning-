// Function to check if a sentence is a pangram
function isPangram(sentence) {
    // Convert the sentence to lowercase and remove non-alphabetic characters
    const cleanedSentence = sentence.toLowerCase().replace(/[^a-z]/g, '');
    
    // Create a set of unique letters in the cleaned sentence
    const uniqueLetters = new Set(cleanedSentence);
    
    // Check if the size of the set is equal to 26 (number of letters in the alphabet)
    return uniqueLetters.size === 26;
  }
  
  // Array of sentences
  const s = ["The quick brown fox jumps over the lazy dog", "hello", "abcdefghijklmnopqrstuvwxyz", "abc def ghi jkl mno pqr stu vwxyz"];
  
  /* Map each sentence to 1 if it's a pangram, or 0 if it's not

var result = s.map(function(sentence) {
  if (isPangram(sentence)) {
    return 1;
  } else {
    return 0;
  }
});

--> faster way of doing it 
  */
  const result = s.map(sentence => isPangram(sentence) ? 1 : 0);
  
  // Print the result array
  console.log(result);
  
