/*
Process.stdin..resume()
Process.stdin.setEncoding(‘utf8’);
Let stdin = “”;
Process.stdin.on(‘data’,(chunk =>){
Stdin = ‘${stdin}${chuck}’;}).on(‘end’, ()=>{const lines = stdin.trim().split(‘\n’);
for(const kine of lines){
process.stdout.write(‘${line}\n’);
}
}); */


process.stdin.resume();
// Set the encoding for standard input to utf8
process.stdin.setEncoding('utf8');

// Initialize an empty string to store the input
let stdin = "";

// Listen for 'data' events on standard input
process.stdin.on('data', (chunk) => {
  // Concatenate the incoming chunk of data to the existing input string
  stdin = `${stdin}${chunk}`;
})
  // Listen for 'end' event on standard input
  .on('end', () => {
    // Trim leading and trailing whitespace, split the input into lines
    const lines = stdin.trim().split('\n');

    // Iterate over each line and write it to standard output
    for (const line of lines) {
      // Assuming there are three numbers separated by spaces on the first line
      const numbers = line.split(' ').map(Number);

      // Check if there are exactly three numbers
      if (numbers.length === 3) {
        // Calculate the sum of the three numbers
        const sum = numbers.reduce((acc, num) => acc + num, 0);

        // Print the result to standard output
        process.stdout.write(`Sum: ${sum}\n`);
      } else {
        process.stdout.write("Please provide exactly three numbers separated by spaces.\n");
      }
    }
  });
