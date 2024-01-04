function pangrams(s) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
  
    // Remove spaces from the input string
    let s1 = s.replace(/\s/g, '');
  
    // Convert all the letters to lowercase
    let s2 = s1.toLowerCase();
  
    // Split the letters into a separate array
    let s3 = s2.split('');
  
    // Create a new array without repetition of elements
    let s4 = [...new Set(s3)];
  
    // Sort the array
    s4.sort();
  
    // Convert the array back to a string
    let s5 = s4.join('');
  
    // Directly return the result
    return s5 === letters ? '1' : '0';
  }
  

  console.log(pangrams("The quick brown fox jumps over the lazy dog")); // Should output "pangram"
  console.log(pangrams("Hello, World!")); // Should output "not pangram"
  console.log(pangrams("Pack my box with five dozen liquor jugs")); // Should output "pangram"
  console.log(pangrams("abcdefghijklmnopqrstuvwxyz")); // Should output "pangram"
  console.log(pangrams("abc def ghi jkl mno pqr stu vwxyz")); // Should output "not pangram"
  
