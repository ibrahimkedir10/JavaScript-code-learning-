
/*
org file

rocess.stdin..resume()
Process.stdin.setEncoding(‘utf8’);
Let stdin = “”;
Process.stdin.on(‘data’,(chunk =>){
Stdin = ‘${stdin}${chuck}’;}).on(‘end’, ()=>{const lines = stdin.trim().split(‘\n’);
for(const kine of lines){
process.stdout.write(‘${line}\n’);
}
});

*/



/* longest word:

ind the longest word in a sentance . if the sentance has more than one word of the same length you should pcik the one that appears first. need to read lines ftom standard input each line has one or more words, each word is spereated by a space, print the longest word 


process.stdin.resume();
process.stdin.setEncoding('utf8');
let stdin = "";

process.stdin.on('data', (chunk) => {
  stdin += chunk;
}).on('end', () => {
  const lines = stdin.trim().split('\n');
  
  for (const line of lines) {
    const words = line.split(' ');
    let longestWord = "";

    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }

    process.stdout.write(`${longestWord}\n`);
  }
});


*/




/*
write a program that given a list of three numbers determin if it is possible to add two of the numbers to arrive at the third 

Process.stdin.resume();
Process.stdin.setEncoding('utf8');

let stdin = "";

Process.stdin.on('data', (chunk) => {
  stdin = `${stdin}${chunk}`;
}).on('end', () => {
  const numbers = stdin.trim().split(' ').map(Number);

  if (numbers.length !== 3 || numbers.some(isNaN)) {
    process.stdout.write("Invalid input. Please enter three valid numbers separated by spaces.\n");
    return;
  }

  const [a, b, c] = numbers;

  const isPossible = a + b === c || b + c === a || c + a === b;

  if (isPossible) {
    process.stdout.write("true\n");
  } else {
    process.stdout.write("false\n");
  }
});



*/