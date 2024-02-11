// regular argument
function example1(a, b, c) {
    console.log(arguments);
  }
  
  example1(1, "two", true);

// converting argument into array to allow for more capability 
function example2(a, b, c) {
    var argsArray = Array.from(arguments);
    console.log(argsArray);
  }
  
  example2(1, "two", 3);
  

  //In modern JavaScript, it's more common to use the rest parameter syntax to handle variable arguments:

function example3(...args) {
  console.log(args);
}

example3(100, "one hundred ", true);